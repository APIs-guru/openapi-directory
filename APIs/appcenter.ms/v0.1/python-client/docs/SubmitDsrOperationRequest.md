# SubmitDsrOperationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**app_id** | **str** |  | [optional] 
**operation_id** | **str** | The DSR operation ID provided by the GDPR coordinator. Used for tracking only. | [optional] 
**request** | **str** |  | [optional] 
**request_id** | **str** | Request ID provided by the GDPR coordinator. Used for tracking. | [optional] 

## Example

```python
from openapi_client.models.submit_dsr_operation_request import SubmitDsrOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitDsrOperationRequest from a JSON string
submit_dsr_operation_request_instance = SubmitDsrOperationRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitDsrOperationRequest.to_json())

# convert the object into a dict
submit_dsr_operation_request_dict = submit_dsr_operation_request_instance.to_dict()
# create an instance of SubmitDsrOperationRequest from a dict
submit_dsr_operation_request_from_dict = SubmitDsrOperationRequest.from_dict(submit_dsr_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


