# LatestOperationResult

Details of the status of an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code on failure. | [optional] [readonly] 
**error_message** | **str** | The error message. | [optional] [readonly] 
**http_method** | **str** | The HttpMethod - PUT/POST/DELETE for the operation. | [optional] [readonly] 
**operation_url** | **str** | The URL to use to check long-running operation status | [optional] [readonly] 
**request_uri** | **str** | Request URI of the operation. | [optional] [readonly] 
**status** | **str** | The current status of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.latest_operation_result import LatestOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of LatestOperationResult from a JSON string
latest_operation_result_instance = LatestOperationResult.from_json(json)
# print the JSON string representation of the object
print(LatestOperationResult.to_json())

# convert the object into a dict
latest_operation_result_dict = latest_operation_result_instance.to_dict()
# create an instance of LatestOperationResult from a dict
latest_operation_result_from_dict = LatestOperationResult.from_dict(latest_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


