# VirtualizationClusterTypesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ClusterType]**](ClusterType.md) |  | 

## Example

```python
from openapi_client.models.virtualization_cluster_types_list200_response import VirtualizationClusterTypesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualizationClusterTypesList200Response from a JSON string
virtualization_cluster_types_list200_response_instance = VirtualizationClusterTypesList200Response.from_json(json)
# print the JSON string representation of the object
print(VirtualizationClusterTypesList200Response.to_json())

# convert the object into a dict
virtualization_cluster_types_list200_response_dict = virtualization_cluster_types_list200_response_instance.to_dict()
# create an instance of VirtualizationClusterTypesList200Response from a dict
virtualization_cluster_types_list200_response_from_dict = VirtualizationClusterTypesList200Response.from_dict(virtualization_cluster_types_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


