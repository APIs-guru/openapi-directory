# IntComparisonFilter

Filter based on relation between source value and compare value of type integer in ConditionalColumnSetValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Required. Integer compare value to be used | [optional] 
**value_comparison** | **str** | Required. Relation between source value and compare value | [optional] 

## Example

```python
from openapi_client.models.int_comparison_filter import IntComparisonFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntComparisonFilter from a JSON string
int_comparison_filter_instance = IntComparisonFilter.from_json(json)
# print the JSON string representation of the object
print(IntComparisonFilter.to_json())

# convert the object into a dict
int_comparison_filter_dict = int_comparison_filter_instance.to_dict()
# create an instance of IntComparisonFilter from a dict
int_comparison_filter_from_dict = IntComparisonFilter.from_dict(int_comparison_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


