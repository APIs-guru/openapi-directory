# StreamValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**StreamValueLinks**](StreamValueLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**value** | [**TimedValue**](TimedValue.md) |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_value import StreamValue

# TODO update the JSON string below
json = "{}"
# create an instance of StreamValue from a JSON string
stream_value_instance = StreamValue.from_json(json)
# print the JSON string representation of the object
print(StreamValue.to_json())

# convert the object into a dict
stream_value_dict = stream_value_instance.to_dict()
# create an instance of StreamValue from a dict
stream_value_from_dict = StreamValue.from_dict(stream_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


