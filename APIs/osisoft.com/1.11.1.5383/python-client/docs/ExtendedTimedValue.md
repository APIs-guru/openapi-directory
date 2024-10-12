# ExtendedTimedValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated** | **bool** |  | [optional] 
**annotations** | [**List[StreamAnnotation]**](StreamAnnotation.md) |  | [optional] 
**errors** | [**List[PropertyError]**](PropertyError.md) |  | [optional] 
**good** | **bool** |  | [optional] 
**questionable** | **bool** |  | [optional] 
**substituted** | **bool** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**units_abbreviation** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_timed_value import ExtendedTimedValue

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedTimedValue from a JSON string
extended_timed_value_instance = ExtendedTimedValue.from_json(json)
# print the JSON string representation of the object
print(ExtendedTimedValue.to_json())

# convert the object into a dict
extended_timed_value_dict = extended_timed_value_instance.to_dict()
# create an instance of ExtendedTimedValue from a dict
extended_timed_value_from_dict = ExtendedTimedValue.from_dict(extended_timed_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


