# PartitionInformation

Information about the partition identity, partitioning scheme and keys supported by it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 
**service_partition_kind** | [**ServicePartitionKind**](ServicePartitionKind.md) |  | 

## Example

```python
from openapi_client.models.partition_information import PartitionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionInformation from a JSON string
partition_information_instance = PartitionInformation.from_json(json)
# print the JSON string representation of the object
print(PartitionInformation.to_json())

# convert the object into a dict
partition_information_dict = partition_information_instance.to_dict()
# create an instance of PartitionInformation from a dict
partition_information_from_dict = PartitionInformation.from_dict(partition_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


