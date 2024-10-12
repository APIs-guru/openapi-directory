# RetryHistory

The retry history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_request_id** | **str** | Gets the client request Id. | [optional] 
**code** | **str** | Gets the status code. | [optional] 
**end_time** | **datetime** | Gets the end time. | [optional] 
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**service_request_id** | **str** | Gets the service request Id. | [optional] 
**start_time** | **datetime** | Gets the start time. | [optional] 

## Example

```python
from openapi_client.models.retry_history import RetryHistory

# TODO update the JSON string below
json = "{}"
# create an instance of RetryHistory from a JSON string
retry_history_instance = RetryHistory.from_json(json)
# print the JSON string representation of the object
print(RetryHistory.to_json())

# convert the object into a dict
retry_history_dict = retry_history_instance.to_dict()
# create an instance of RetryHistory from a dict
retry_history_from_dict = RetryHistory.from_dict(retry_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


