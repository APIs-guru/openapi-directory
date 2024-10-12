# PartitionInstanceCountScaleMechanism

Represents a scaling mechanism for adding or removing instances of stateless service partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instance_count** | **int** | Maximum number of instances of the partition. | 
**min_instance_count** | **int** | Minimum number of instances of the partition. | 
**scale_increment** | **int** | The number of instances to add or remove during a scaling operation. | 

## Example

```python
from openapi_client.models.partition_instance_count_scale_mechanism import PartitionInstanceCountScaleMechanism

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionInstanceCountScaleMechanism from a JSON string
partition_instance_count_scale_mechanism_instance = PartitionInstanceCountScaleMechanism.from_json(json)
# print the JSON string representation of the object
print(PartitionInstanceCountScaleMechanism.to_json())

# convert the object into a dict
partition_instance_count_scale_mechanism_dict = partition_instance_count_scale_mechanism_instance.to_dict()
# create an instance of PartitionInstanceCountScaleMechanism from a dict
partition_instance_count_scale_mechanism_from_dict = PartitionInstanceCountScaleMechanism.from_dict(partition_instance_count_scale_mechanism_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


