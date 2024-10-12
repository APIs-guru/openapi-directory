# SetMasterAuthRequest

SetMasterAuthRequest updates the admin password of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Required. The exact form of action to be taken on the master auth. | [optional] 
**cluster_id** | **str** | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to set auth. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**update** | [**MasterAuth**](MasterAuth.md) |  | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_master_auth_request import SetMasterAuthRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetMasterAuthRequest from a JSON string
set_master_auth_request_instance = SetMasterAuthRequest.from_json(json)
# print the JSON string representation of the object
print(SetMasterAuthRequest.to_json())

# convert the object into a dict
set_master_auth_request_dict = set_master_auth_request_instance.to_dict()
# create an instance of SetMasterAuthRequest from a dict
set_master_auth_request_from_dict = SetMasterAuthRequest.from_dict(set_master_auth_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


