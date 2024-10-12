# ResolvedServicePartition

The partition of the resolved service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[ResolvedServicePartitionEndpointsInner]**](ResolvedServicePartitionEndpointsInner.md) |  | [optional] 
**name** | **str** |  | [optional] 
**partition_information** | [**PartitionInformation**](PartitionInformation.md) |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.resolved_service_partition import ResolvedServicePartition

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedServicePartition from a JSON string
resolved_service_partition_instance = ResolvedServicePartition.from_json(json)
# print the JSON string representation of the object
print(ResolvedServicePartition.to_json())

# convert the object into a dict
resolved_service_partition_dict = resolved_service_partition_instance.to_dict()
# create an instance of ResolvedServicePartition from a dict
resolved_service_partition_from_dict = ResolvedServicePartition.from_dict(resolved_service_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


