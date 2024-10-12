# ResolvedServicePartition

Information about a service partition and its associated endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[ResolvedServiceEndpoint]**](ResolvedServiceEndpoint.md) | List of resolved service endpoints of a service partition. | 
**name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | 
**partition_information** | [**PartitionInformation**](PartitionInformation.md) |  | 
**version** | **str** | The version of this resolved service partition result. This version should be passed in the next time the ResolveService call is made via the PreviousRspVersion query parameter. | 

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


