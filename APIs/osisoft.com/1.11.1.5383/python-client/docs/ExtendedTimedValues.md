# ExtendedTimedValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ExtendedTimedValue]**](ExtendedTimedValue.md) |  | [optional] 
**units_abbreviation** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_timed_values import ExtendedTimedValues

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedTimedValues from a JSON string
extended_timed_values_instance = ExtendedTimedValues.from_json(json)
# print the JSON string representation of the object
print(ExtendedTimedValues.to_json())

# convert the object into a dict
extended_timed_values_dict = extended_timed_values_instance.to_dict()
# create an instance of ExtendedTimedValues from a dict
extended_timed_values_from_dict = ExtendedTimedValues.from_dict(extended_timed_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


