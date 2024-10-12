# UpdateClusterRequest

UpdateClusterRequest updates the settings of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to update. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**update** | [**ClusterUpdate**](ClusterUpdate.md) |  | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.update_cluster_request import UpdateClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClusterRequest from a JSON string
update_cluster_request_instance = UpdateClusterRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateClusterRequest.to_json())

# convert the object into a dict
update_cluster_request_dict = update_cluster_request_instance.to_dict()
# create an instance of UpdateClusterRequest from a dict
update_cluster_request_from_dict = UpdateClusterRequest.from_dict(update_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


