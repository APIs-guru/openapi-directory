# SetLegacyAbacRequest

SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. | [optional] 
**enabled** | **bool** | Required. Whether ABAC authorization will be enabled in the cluster. | [optional] 
**name** | **str** | The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_legacy_abac_request import SetLegacyAbacRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetLegacyAbacRequest from a JSON string
set_legacy_abac_request_instance = SetLegacyAbacRequest.from_json(json)
# print the JSON string representation of the object
print(SetLegacyAbacRequest.to_json())

# convert the object into a dict
set_legacy_abac_request_dict = set_legacy_abac_request_instance.to_dict()
# create an instance of SetLegacyAbacRequest from a dict
set_legacy_abac_request_from_dict = SetLegacyAbacRequest.from_dict(set_legacy_abac_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


