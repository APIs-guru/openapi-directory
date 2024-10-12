# PartitionOptions

Options for a PartitionQueryRequest and PartitionReadRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_partitions** | **str** | **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired maximum number of partitions to return. For example, this may be set to the number of workers available. The default for this option is currently 10,000. The maximum value is currently 200,000. This is only a hint. The actual number of partitions returned may be smaller or larger than this maximum count request. | [optional] 
**partition_size_bytes** | **str** | **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired data size for each partition generated. The default for this option is currently 1 GiB. This is only a hint. The actual size of each partition may be smaller or larger than this size request. | [optional] 

## Example

```python
from openapi_client.models.partition_options import PartitionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionOptions from a JSON string
partition_options_instance = PartitionOptions.from_json(json)
# print the JSON string representation of the object
print(PartitionOptions.to_json())

# convert the object into a dict
partition_options_dict = partition_options_instance.to_dict()
# create an instance of PartitionOptions from a dict
partition_options_from_dict = PartitionOptions.from_dict(partition_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


