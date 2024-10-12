# PartitionConfig

The settings for a topic's partitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**Capacity**](Capacity.md) |  | [optional] 
**count** | **str** | The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity | [optional] 
**scale** | **int** | DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to &#x60;scale&#x60; times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with &#x60;scale&#x60; of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4]. | [optional] 

## Example

```python
from openapi_client.models.partition_config import PartitionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionConfig from a JSON string
partition_config_instance = PartitionConfig.from_json(json)
# print the JSON string representation of the object
print(PartitionConfig.to_json())

# convert the object into a dict
partition_config_dict = partition_config_instance.to_dict()
# create an instance of PartitionConfig from a dict
partition_config_from_dict = PartitionConfig.from_dict(partition_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


