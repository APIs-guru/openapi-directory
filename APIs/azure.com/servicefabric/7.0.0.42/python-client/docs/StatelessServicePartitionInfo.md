# StatelessServicePartitionInfo

Information about a partition of a stateless Service Fabric service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | Number of instances of this partition. | [optional] 
**min_instance_count** | **int** | MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | [optional] [default to 1]
**min_instance_percentage** | **int** | MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | [optional] [default to 0]

## Example

```python
from openapi_client.models.stateless_service_partition_info import StatelessServicePartitionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServicePartitionInfo from a JSON string
stateless_service_partition_info_instance = StatelessServicePartitionInfo.from_json(json)
# print the JSON string representation of the object
print(StatelessServicePartitionInfo.to_json())

# convert the object into a dict
stateless_service_partition_info_dict = stateless_service_partition_info_instance.to_dict()
# create an instance of StatelessServicePartitionInfo from a dict
stateless_service_partition_info_from_dict = StatelessServicePartitionInfo.from_dict(stateless_service_partition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


