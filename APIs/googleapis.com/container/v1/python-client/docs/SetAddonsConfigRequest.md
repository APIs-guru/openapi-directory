# SetAddonsConfigRequest

SetAddonsConfigRequest sets the addons associated with the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_config** | [**AddonsConfig**](AddonsConfig.md) |  | [optional] 
**cluster_id** | **str** | Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to set addons. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_addons_config_request import SetAddonsConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetAddonsConfigRequest from a JSON string
set_addons_config_request_instance = SetAddonsConfigRequest.from_json(json)
# print the JSON string representation of the object
print(SetAddonsConfigRequest.to_json())

# convert the object into a dict
set_addons_config_request_dict = set_addons_config_request_instance.to_dict()
# create an instance of SetAddonsConfigRequest from a dict
set_addons_config_request_from_dict = SetAddonsConfigRequest.from_dict(set_addons_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


