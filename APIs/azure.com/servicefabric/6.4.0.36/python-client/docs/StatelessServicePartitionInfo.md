# StatelessServicePartitionInfo

Information about a partition of a stateless Service Fabric service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | Number of instances of this partition. | [optional] 

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


