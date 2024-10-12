# PivotGroupLimit

The count limit on rows or columns in the pivot group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_order** | **int** | The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list. | [optional] 
**count_limit** | **int** | The count limit. | [optional] 

## Example

```python
from openapi_client.models.pivot_group_limit import PivotGroupLimit

# TODO update the JSON string below
json = "{}"
# create an instance of PivotGroupLimit from a JSON string
pivot_group_limit_instance = PivotGroupLimit.from_json(json)
# print the JSON string representation of the object
print(PivotGroupLimit.to_json())

# convert the object into a dict
pivot_group_limit_dict = pivot_group_limit_instance.to_dict()
# create an instance of PivotGroupLimit from a dict
pivot_group_limit_from_dict = PivotGroupLimit.from_dict(pivot_group_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


