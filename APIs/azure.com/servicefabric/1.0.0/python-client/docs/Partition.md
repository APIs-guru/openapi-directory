# Partition

The partition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_configuration_epoch** | [**PartitionCurrentConfigurationEpoch**](PartitionCurrentConfigurationEpoch.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**instance_count** | **int** |  | [optional] 
**min_replica_set_size** | **int** |  | [optional] 
**partition_information** | [**PartitionInformation**](PartitionInformation.md) |  | [optional] 
**partition_status** | **str** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**target_replica_set_size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.partition import Partition

# TODO update the JSON string below
json = "{}"
# create an instance of Partition from a JSON string
partition_instance = Partition.from_json(json)
# print the JSON string representation of the object
print(Partition.to_json())

# convert the object into a dict
partition_dict = partition_instance.to_dict()
# create an instance of Partition from a dict
partition_from_dict = Partition.from_dict(partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


