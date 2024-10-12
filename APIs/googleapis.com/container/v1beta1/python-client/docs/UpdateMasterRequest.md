# UpdateMasterRequest

UpdateMasterRequest updates the master of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**master_version** | **str** | Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \&quot;latest\&quot;: picks the highest valid Kubernetes version - \&quot;1.X\&quot;: picks the highest valid patch+gke.N patch in the 1.X version - \&quot;1.X.Y\&quot;: picks the highest valid gke.N patch in the 1.X.Y version - \&quot;1.X.Y-gke.N\&quot;: picks an explicit Kubernetes version - \&quot;-\&quot;: picks the default Kubernetes version | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to update. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.update_master_request import UpdateMasterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMasterRequest from a JSON string
update_master_request_instance = UpdateMasterRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMasterRequest.to_json())

# convert the object into a dict
update_master_request_dict = update_master_request_instance.to_dict()
# create an instance of UpdateMasterRequest from a dict
update_master_request_from_dict = UpdateMasterRequest.from_dict(update_master_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


