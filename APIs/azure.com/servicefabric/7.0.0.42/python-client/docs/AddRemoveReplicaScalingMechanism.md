# AddRemoveReplicaScalingMechanism

Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_count** | **int** | Maximum number of containers (scale up won&#39;t be performed above this number). | 
**min_count** | **int** | Minimum number of containers (scale down won&#39;t be performed below this number). | 
**scale_increment** | **int** | Each time auto scaling is performed, this number of containers will be added or removed. | 

## Example

```python
from openapi_client.models.add_remove_replica_scaling_mechanism import AddRemoveReplicaScalingMechanism

# TODO update the JSON string below
json = "{}"
# create an instance of AddRemoveReplicaScalingMechanism from a JSON string
add_remove_replica_scaling_mechanism_instance = AddRemoveReplicaScalingMechanism.from_json(json)
# print the JSON string representation of the object
print(AddRemoveReplicaScalingMechanism.to_json())

# convert the object into a dict
add_remove_replica_scaling_mechanism_dict = add_remove_replica_scaling_mechanism_instance.to_dict()
# create an instance of AddRemoveReplicaScalingMechanism from a dict
add_remove_replica_scaling_mechanism_from_dict = AddRemoveReplicaScalingMechanism.from_dict(add_remove_replica_scaling_mechanism_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


