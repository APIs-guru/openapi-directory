# PivotGroupSortValueBucket

Information about which values in a pivot group should be used for sorting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[ExtendedValue]**](ExtendedValue.md) | Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group &amp; two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the \&quot;Grand Total\&quot; over the column groups. If a single value is listed, this would correspond to using the \&quot;Total\&quot; of that bucket. | [optional] 
**values_index** | **int** | The offset in the PivotTable.values list which the values in this grouping should be sorted by. | [optional] 

## Example

```python
from openapi_client.models.pivot_group_sort_value_bucket import PivotGroupSortValueBucket

# TODO update the JSON string below
json = "{}"
# create an instance of PivotGroupSortValueBucket from a JSON string
pivot_group_sort_value_bucket_instance = PivotGroupSortValueBucket.from_json(json)
# print the JSON string representation of the object
print(PivotGroupSortValueBucket.to_json())

# convert the object into a dict
pivot_group_sort_value_bucket_dict = pivot_group_sort_value_bucket_instance.to_dict()
# create an instance of PivotGroupSortValueBucket from a dict
pivot_group_sort_value_bucket_from_dict = PivotGroupSortValueBucket.from_dict(pivot_group_sort_value_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


