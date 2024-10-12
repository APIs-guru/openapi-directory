# UniformInt64RangePartitionSchemeDescription

Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of partitions. | 
**high_key** | **str** | String indicating the upper bound of the partition key range that should be split between the partitions. | 
**low_key** | **str** | String indicating the lower bound of the partition key range that should be split between the partitions. | 

## Example

```python
from openapi_client.models.uniform_int64_range_partition_scheme_description import UniformInt64RangePartitionSchemeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of UniformInt64RangePartitionSchemeDescription from a JSON string
uniform_int64_range_partition_scheme_description_instance = UniformInt64RangePartitionSchemeDescription.from_json(json)
# print the JSON string representation of the object
print(UniformInt64RangePartitionSchemeDescription.to_json())

# convert the object into a dict
uniform_int64_range_partition_scheme_description_dict = uniform_int64_range_partition_scheme_description_instance.to_dict()
# create an instance of UniformInt64RangePartitionSchemeDescription from a dict
uniform_int64_range_partition_scheme_description_from_dict = UniformInt64RangePartitionSchemeDescription.from_dict(uniform_int64_range_partition_scheme_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


