# NumberInAdvancedFilter

NumberIn Advanced Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** | The set of filter values. | [optional] 

## Example

```python
from openapi_client.models.number_in_advanced_filter import NumberInAdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of NumberInAdvancedFilter from a JSON string
number_in_advanced_filter_instance = NumberInAdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(NumberInAdvancedFilter.to_json())

# convert the object into a dict
number_in_advanced_filter_dict = number_in_advanced_filter_instance.to_dict()
# create an instance of NumberInAdvancedFilter from a dict
number_in_advanced_filter_from_dict = NumberInAdvancedFilter.from_dict(number_in_advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


