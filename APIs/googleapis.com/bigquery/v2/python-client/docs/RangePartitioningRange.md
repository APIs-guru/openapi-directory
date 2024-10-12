# RangePartitioningRange

[Experimental] Defines the ranges for range partitioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | [Experimental] The end of range partitioning, exclusive. | [optional] 
**interval** | **str** | [Experimental] The width of each interval. | [optional] 
**start** | **str** | [Experimental] The start of range partitioning, inclusive. | [optional] 

## Example

```python
from openapi_client.models.range_partitioning_range import RangePartitioningRange

# TODO update the JSON string below
json = "{}"
# create an instance of RangePartitioningRange from a JSON string
range_partitioning_range_instance = RangePartitioningRange.from_json(json)
# print the JSON string representation of the object
print(RangePartitioningRange.to_json())

# convert the object into a dict
range_partitioning_range_dict = range_partitioning_range_instance.to_dict()
# create an instance of RangePartitioningRange from a dict
range_partitioning_range_from_dict = RangePartitioningRange.from_dict(range_partitioning_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


