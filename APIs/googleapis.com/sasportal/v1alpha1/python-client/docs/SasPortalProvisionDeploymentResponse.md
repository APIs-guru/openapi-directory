# SasPortalProvisionDeploymentResponse

Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Optional. Optional error message if the provisioning request is not successful. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_provision_deployment_response import SasPortalProvisionDeploymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalProvisionDeploymentResponse from a JSON string
sas_portal_provision_deployment_response_instance = SasPortalProvisionDeploymentResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalProvisionDeploymentResponse.to_json())

# convert the object into a dict
sas_portal_provision_deployment_response_dict = sas_portal_provision_deployment_response_instance.to_dict()
# create an instance of SasPortalProvisionDeploymentResponse from a dict
sas_portal_provision_deployment_response_from_dict = SasPortalProvisionDeploymentResponse.from_dict(sas_portal_provision_deployment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


