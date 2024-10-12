# RangePartitioning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Required. [Experimental] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64. | [optional] 
**range** | [**RangePartitioningRange**](RangePartitioningRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.range_partitioning import RangePartitioning

# TODO update the JSON string below
json = "{}"
# create an instance of RangePartitioning from a JSON string
range_partitioning_instance = RangePartitioning.from_json(json)
# print the JSON string representation of the object
print(RangePartitioning.to_json())

# convert the object into a dict
range_partitioning_dict = range_partitioning_instance.to_dict()
# create an instance of RangePartitioning from a dict
range_partitioning_from_dict = RangePartitioning.from_dict(range_partitioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


