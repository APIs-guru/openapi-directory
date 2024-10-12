# AddRemoveIncrementalNamedPartitionScalingMechanism

Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1''N-1'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_partition_count** | **int** | Maximum number of named partitions of the service. | 
**min_partition_count** | **int** | Minimum number of named partitions of the service. | 
**scale_increment** | **int** | The number of instances to add or remove during a scaling operation. | 

## Example

```python
from openapi_client.models.add_remove_incremental_named_partition_scaling_mechanism import AddRemoveIncrementalNamedPartitionScalingMechanism

# TODO update the JSON string below
json = "{}"
# create an instance of AddRemoveIncrementalNamedPartitionScalingMechanism from a JSON string
add_remove_incremental_named_partition_scaling_mechanism_instance = AddRemoveIncrementalNamedPartitionScalingMechanism.from_json(json)
# print the JSON string representation of the object
print(AddRemoveIncrementalNamedPartitionScalingMechanism.to_json())

# convert the object into a dict
add_remove_incremental_named_partition_scaling_mechanism_dict = add_remove_incremental_named_partition_scaling_mechanism_instance.to_dict()
# create an instance of AddRemoveIncrementalNamedPartitionScalingMechanism from a dict
add_remove_incremental_named_partition_scaling_mechanism_from_dict = AddRemoveIncrementalNamedPartitionScalingMechanism.from_dict(add_remove_incremental_named_partition_scaling_mechanism_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


