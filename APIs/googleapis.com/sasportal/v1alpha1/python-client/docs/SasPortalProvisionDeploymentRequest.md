# SasPortalProvisionDeploymentRequest

Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_deployment_display_name** | **str** | Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field. | [optional] 
**new_organization_display_name** | **str** | Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field. | [optional] 
**organization_id** | **str** | Optional. If this field is set then a new deployment will be created under the organization specified by this id. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_provision_deployment_request import SasPortalProvisionDeploymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalProvisionDeploymentRequest from a JSON string
sas_portal_provision_deployment_request_instance = SasPortalProvisionDeploymentRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalProvisionDeploymentRequest.to_json())

# convert the object into a dict
sas_portal_provision_deployment_request_dict = sas_portal_provision_deployment_request_instance.to_dict()
# create an instance of SasPortalProvisionDeploymentRequest from a dict
sas_portal_provision_deployment_request_from_dict = SasPortalProvisionDeploymentRequest.from_dict(sas_portal_provision_deployment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


