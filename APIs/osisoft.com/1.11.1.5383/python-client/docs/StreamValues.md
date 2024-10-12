# StreamValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[TimedValue]**](TimedValue.md) |  | [optional] 
**links** | [**StreamValuesLinks**](StreamValuesLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**units_abbreviation** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_values import StreamValues

# TODO update the JSON string below
json = "{}"
# create an instance of StreamValues from a JSON string
stream_values_instance = StreamValues.from_json(json)
# print the JSON string representation of the object
print(StreamValues.to_json())

# convert the object into a dict
stream_values_dict = stream_values_instance.to_dict()
# create an instance of StreamValues from a dict
stream_values_from_dict = StreamValues.from_dict(stream_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


