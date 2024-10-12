# VirtualizationClustersList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Cluster]**](Cluster.md) |  | 

## Example

```python
from openapi_client.models.virtualization_clusters_list200_response import VirtualizationClustersList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualizationClustersList200Response from a JSON string
virtualization_clusters_list200_response_instance = VirtualizationClustersList200Response.from_json(json)
# print the JSON string representation of the object
print(VirtualizationClustersList200Response.to_json())

# convert the object into a dict
virtualization_clusters_list200_response_dict = virtualization_clusters_list200_response_instance.to_dict()
# create an instance of VirtualizationClustersList200Response from a dict
virtualization_clusters_list200_response_from_dict = VirtualizationClustersList200Response.from_dict(virtualization_clusters_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


