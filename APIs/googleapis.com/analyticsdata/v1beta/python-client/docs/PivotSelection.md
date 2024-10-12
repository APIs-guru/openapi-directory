# PivotSelection

A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{\"browser\", \"Chrome\"}} and metric_name = \"Sessions\", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | Must be a dimension name from the request. | [optional] 
**dimension_value** | **str** | Order by only when the named dimension is this value. | [optional] 

## Example

```python
from openapi_client.models.pivot_selection import PivotSelection

# TODO update the JSON string below
json = "{}"
# create an instance of PivotSelection from a JSON string
pivot_selection_instance = PivotSelection.from_json(json)
# print the JSON string representation of the object
print(PivotSelection.to_json())

# convert the object into a dict
pivot_selection_dict = pivot_selection_instance.to_dict()
# create an instance of PivotSelection from a dict
pivot_selection_from_dict = PivotSelection.from_dict(pivot_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


