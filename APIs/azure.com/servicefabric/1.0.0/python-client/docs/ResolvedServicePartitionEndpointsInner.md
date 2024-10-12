# ResolvedServicePartitionEndpointsInner

The endpoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**kind** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.resolved_service_partition_endpoints_inner import ResolvedServicePartitionEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedServicePartitionEndpointsInner from a JSON string
resolved_service_partition_endpoints_inner_instance = ResolvedServicePartitionEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(ResolvedServicePartitionEndpointsInner.to_json())

# convert the object into a dict
resolved_service_partition_endpoints_inner_dict = resolved_service_partition_endpoints_inner_instance.to_dict()
# create an instance of ResolvedServicePartitionEndpointsInner from a dict
resolved_service_partition_endpoints_inner_from_dict = ResolvedServicePartitionEndpointsInner.from_dict(resolved_service_partition_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


