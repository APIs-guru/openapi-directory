# SasPortalDeploymentAssociation

Association between a gcp project and a SAS user id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_project_id** | **str** | GCP project id of the associated project. | [optional] 
**user_id** | **str** | User id of the deployment. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_deployment_association import SasPortalDeploymentAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeploymentAssociation from a JSON string
sas_portal_deployment_association_instance = SasPortalDeploymentAssociation.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeploymentAssociation.to_json())

# convert the object into a dict
sas_portal_deployment_association_dict = sas_portal_deployment_association_instance.to_dict()
# create an instance of SasPortalDeploymentAssociation from a dict
sas_portal_deployment_association_from_dict = SasPortalDeploymentAssociation.from_dict(sas_portal_deployment_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


