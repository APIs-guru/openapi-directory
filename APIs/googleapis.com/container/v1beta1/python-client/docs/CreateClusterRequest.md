# CreateClusterRequest

CreateClusterRequest creates a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | [**Cluster**](Cluster.md) |  | [optional] 
**parent** | **str** | The parent (project and location) where the cluster will be created. Specified in the format &#x60;projects/*/locations/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. | [optional] 

## Example

```python
from openapi_client.models.create_cluster_request import CreateClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClusterRequest from a JSON string
create_cluster_request_instance = CreateClusterRequest.from_json(json)
# print the JSON string representation of the object
print(CreateClusterRequest.to_json())

# convert the object into a dict
create_cluster_request_dict = create_cluster_request_instance.to_dict()
# create an instance of CreateClusterRequest from a dict
create_cluster_request_from_dict = CreateClusterRequest.from_dict(create_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


