# StopWatchingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.stop_watching_response import StopWatchingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StopWatchingResponse from a JSON string
stop_watching_response_instance = StopWatchingResponse.from_json(json)
# print the JSON string representation of the object
print(StopWatchingResponse.to_json())

# convert the object into a dict
stop_watching_response_dict = stop_watching_response_instance.to_dict()
# create an instance of StopWatchingResponse from a dict
stop_watching_response_from_dict = StopWatchingResponse.from_dict(stop_watching_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


