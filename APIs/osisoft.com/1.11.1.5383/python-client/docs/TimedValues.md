# TimedValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[TimedValue]**](TimedValue.md) |  | [optional] 
**units_abbreviation** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.timed_values import TimedValues

# TODO update the JSON string below
json = "{}"
# create an instance of TimedValues from a JSON string
timed_values_instance = TimedValues.from_json(json)
# print the JSON string representation of the object
print(TimedValues.to_json())

# convert the object into a dict
timed_values_dict = timed_values_instance.to_dict()
# create an instance of TimedValues from a dict
timed_values_from_dict = TimedValues.from_dict(timed_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


