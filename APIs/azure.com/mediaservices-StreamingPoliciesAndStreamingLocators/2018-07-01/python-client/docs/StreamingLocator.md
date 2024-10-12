# StreamingLocator

A Streaming Locator resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingLocatorProperties**](StreamingLocatorProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_locator import StreamingLocator

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocator from a JSON string
streaming_locator_instance = StreamingLocator.from_json(json)
# print the JSON string representation of the object
print(StreamingLocator.to_json())

# convert the object into a dict
streaming_locator_dict = streaming_locator_instance.to_dict()
# create an instance of StreamingLocator from a dict
streaming_locator_from_dict = StreamingLocator.from_dict(streaming_locator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


