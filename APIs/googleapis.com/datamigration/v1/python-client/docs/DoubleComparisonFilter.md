# DoubleComparisonFilter

Filter based on relation between source value and compare value of type double in ConditionalColumnSetValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Required. Double compare value to be used | [optional] 
**value_comparison** | **str** | Required. Relation between source value and compare value | [optional] 

## Example

```python
from openapi_client.models.double_comparison_filter import DoubleComparisonFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleComparisonFilter from a JSON string
double_comparison_filter_instance = DoubleComparisonFilter.from_json(json)
# print the JSON string representation of the object
print(DoubleComparisonFilter.to_json())

# convert the object into a dict
double_comparison_filter_dict = double_comparison_filter_instance.to_dict()
# create an instance of DoubleComparisonFilter from a dict
double_comparison_filter_from_dict = DoubleComparisonFilter.from_dict(double_comparison_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


