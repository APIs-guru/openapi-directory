# ApiResponse

Response returned by most Queue API calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of Queues or QueueMessages returned by the call. | [optional] 
**message** | **str** | Informative message intended for client. | [optional] 
**queue_messages** | [**List[QueueMessage]**](QueueMessage.md) | Queues Messages returned by the call, or empty if not applicable. | [optional] 
**queues** | [**List[Queue]**](Queue.md) | Queues returned but the call, or empty if not applicable. | [optional] 

## Example

```python
from openapi_client.models.api_response import ApiResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResponse from a JSON string
api_response_instance = ApiResponse.from_json(json)
# print the JSON string representation of the object
print(ApiResponse.to_json())

# convert the object into a dict
api_response_dict = api_response_instance.to_dict()
# create an instance of ApiResponse from a dict
api_response_from_dict = ApiResponse.from_dict(api_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


