# PivotFilterCriteria

Criteria for showing/hiding rows in a pivot table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**BooleanCondition**](BooleanCondition.md) |  | [optional] 
**visible_by_default** | **bool** | Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. | [optional] 
**visible_values** | **List[str]** | Values that should be included. Values not listed here are excluded. | [optional] 

## Example

```python
from openapi_client.models.pivot_filter_criteria import PivotFilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of PivotFilterCriteria from a JSON string
pivot_filter_criteria_instance = PivotFilterCriteria.from_json(json)
# print the JSON string representation of the object
print(PivotFilterCriteria.to_json())

# convert the object into a dict
pivot_filter_criteria_dict = pivot_filter_criteria_instance.to_dict()
# create an instance of PivotFilterCriteria from a dict
pivot_filter_criteria_from_dict = PivotFilterCriteria.from_dict(pivot_filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


