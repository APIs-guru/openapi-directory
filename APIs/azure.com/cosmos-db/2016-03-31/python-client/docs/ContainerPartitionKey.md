# ContainerPartitionKey

The configuration of the partition key to be used for partitioning data into multiple partitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Indicates the kind of algorithm used for partitioning | [optional] [default to 'Hash']
**paths** | **List[str]** | List of paths using which data within the container can be partitioned | [optional] 

## Example

```python
from openapi_client.models.container_partition_key import ContainerPartitionKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerPartitionKey from a JSON string
container_partition_key_instance = ContainerPartitionKey.from_json(json)
# print the JSON string representation of the object
print(ContainerPartitionKey.to_json())

# convert the object into a dict
container_partition_key_dict = container_partition_key_instance.to_dict()
# create an instance of ContainerPartitionKey from a dict
container_partition_key_from_dict = ContainerPartitionKey.from_dict(container_partition_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


