# EnterpriseCrmEventbusProtoScatterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_msg** | **str** | The error message of the failure if applicable. | [optional] 
**execution_ids** | **List[str]** | The execution ids of each Subworkflow fired by this scatter. | [optional] 
**is_successful** | **bool** | If execution is sync, this is true if the execution passed and false if it failed. If the execution is async, this is true if the WF was fired off successfully, and false if it failed to execute. The success or failure of the subworkflows executed are not captured. | [optional] 
**response_params** | [**List[EnterpriseCrmEventbusProtoParameterEntry]**](EnterpriseCrmEventbusProtoParameterEntry.md) | A list of all the response parameters in the aggregtorMap stored with the remapped key. | [optional] 
**scatter_element** | [**EnterpriseCrmEventbusProtoParameterValueType**](EnterpriseCrmEventbusProtoParameterValueType.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_scatter_response import EnterpriseCrmEventbusProtoScatterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoScatterResponse from a JSON string
enterprise_crm_eventbus_proto_scatter_response_instance = EnterpriseCrmEventbusProtoScatterResponse.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoScatterResponse.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_scatter_response_dict = enterprise_crm_eventbus_proto_scatter_response_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoScatterResponse from a dict
enterprise_crm_eventbus_proto_scatter_response_from_dict = EnterpriseCrmEventbusProtoScatterResponse.from_dict(enterprise_crm_eventbus_proto_scatter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


