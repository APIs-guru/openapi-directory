# SasPortalDeployment

The Deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The deployment&#39;s display name. | [optional] 
**frns** | **List[str]** | Output only. The FCC Registration Numbers (FRNs) copied from its direct parent. | [optional] [readonly] 
**name** | **str** | Output only. Resource name. | [optional] [readonly] 
**sas_user_ids** | **List[str]** | User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_deployment import SasPortalDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeployment from a JSON string
sas_portal_deployment_instance = SasPortalDeployment.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeployment.to_json())

# convert the object into a dict
sas_portal_deployment_dict = sas_portal_deployment_instance.to_dict()
# create an instance of SasPortalDeployment from a dict
sas_portal_deployment_from_dict = SasPortalDeployment.from_dict(sas_portal_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


