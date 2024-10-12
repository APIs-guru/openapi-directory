# TimedValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated** | **bool** |  | [optional] 
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
from openapi_client.models.timed_value import TimedValue

# TODO update the JSON string below
json = "{}"
# create an instance of TimedValue from a JSON string
timed_value_instance = TimedValue.from_json(json)
# print the JSON string representation of the object
print(TimedValue.to_json())

# convert the object into a dict
timed_value_dict = timed_value_instance.to_dict()
# create an instance of TimedValue from a dict
timed_value_from_dict = TimedValue.from_dict(timed_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


