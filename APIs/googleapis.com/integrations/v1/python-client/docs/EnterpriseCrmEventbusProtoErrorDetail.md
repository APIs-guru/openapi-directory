# EnterpriseCrmEventbusProtoErrorDetail

An error, warning, or information message associated with a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | [**CrmlogErrorCode**](CrmlogErrorCode.md) |  | [optional] 
**error_message** | **str** | The full text of the error message, including any parameters that were thrown along with the exception. | [optional] 
**severity** | **str** | The severity of the error: ERROR|WARN|INFO. | [optional] 
**task_number** | **int** | The task try-number, in which, the error occurred. If zero, the error happened at the event level. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_error_detail import EnterpriseCrmEventbusProtoErrorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoErrorDetail from a JSON string
enterprise_crm_eventbus_proto_error_detail_instance = EnterpriseCrmEventbusProtoErrorDetail.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoErrorDetail.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_error_detail_dict = enterprise_crm_eventbus_proto_error_detail_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoErrorDetail from a dict
enterprise_crm_eventbus_proto_error_detail_from_dict = EnterpriseCrmEventbusProtoErrorDetail.from_dict(enterprise_crm_eventbus_proto_error_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


