# BoolEqualsAdvancedFilter

BoolEquals Advanced Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bool** | The boolean filter value. | [optional] 

## Example

```python
from openapi_client.models.bool_equals_advanced_filter import BoolEqualsAdvancedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BoolEqualsAdvancedFilter from a JSON string
bool_equals_advanced_filter_instance = BoolEqualsAdvancedFilter.from_json(json)
# print the JSON string representation of the object
print(BoolEqualsAdvancedFilter.to_json())

# convert the object into a dict
bool_equals_advanced_filter_dict = bool_equals_advanced_filter_instance.to_dict()
# create an instance of BoolEqualsAdvancedFilter from a dict
bool_equals_advanced_filter_from_dict = BoolEqualsAdvancedFilter.from_dict(bool_equals_advanced_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


