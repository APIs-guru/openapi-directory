# Int64RangePartitionInformation

Describes the partition information for the integer range that is based on partition schemes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_key** | **str** | Specifies the maximum key value handled by this partition. | [optional] 
**low_key** | **str** | Specifies the minimum key value handled by this partition. | [optional] 

## Example

```python
from openapi_client.models.int64_range_partition_information import Int64RangePartitionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of Int64RangePartitionInformation from a JSON string
int64_range_partition_information_instance = Int64RangePartitionInformation.from_json(json)
# print the JSON string representation of the object
print(Int64RangePartitionInformation.to_json())

# convert the object into a dict
int64_range_partition_information_dict = int64_range_partition_information_instance.to_dict()
# create an instance of Int64RangePartitionInformation from a dict
int64_range_partition_information_from_dict = Int64RangePartitionInformation.from_dict(int64_range_partition_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


