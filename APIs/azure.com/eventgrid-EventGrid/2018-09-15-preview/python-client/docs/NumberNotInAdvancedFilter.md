# NumberNotInAdvancedFilter

NumberNotIn Filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** | The set of filter values | [optional] 

## Example

```python
from openapi_client.models.number_not_in_advanced_filter import NumberNotInAdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of NumberNotInAdvancedFilter from a JSON string
number_not_in_advanced_filter_instance = NumberNotInAdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(NumberNotInAdvancedFilter.to_json())

# convert the object into a dict
number_not_in_advanced_filter_dict = number_not_in_advanced_filter_instance.to_dict()
# create an instance of NumberNotInAdvancedFilter from a dict
number_not_in_advanced_filter_from_dict = NumberNotInAdvancedFilter.from_dict(number_not_in_advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


