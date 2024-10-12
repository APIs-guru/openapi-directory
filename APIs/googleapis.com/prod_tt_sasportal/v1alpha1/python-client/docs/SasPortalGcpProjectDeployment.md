# SasPortalGcpProjectDeployment

Deployment associated with the GCP project. Includes whether SAS analytics has been enabled or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**SasPortalDeployment**](SasPortalDeployment.md) |  | [optional] 
**has_enabled_analytics** | **bool** | Whether SAS analytics has been enabled. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_gcp_project_deployment import SasPortalGcpProjectDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalGcpProjectDeployment from a JSON string
sas_portal_gcp_project_deployment_instance = SasPortalGcpProjectDeployment.from_json(json)
# print the JSON string representation of the object
print(SasPortalGcpProjectDeployment.to_json())

# convert the object into a dict
sas_portal_gcp_project_deployment_dict = sas_portal_gcp_project_deployment_instance.to_dict()
# create an instance of SasPortalGcpProjectDeployment from a dict
sas_portal_gcp_project_deployment_from_dict = SasPortalGcpProjectDeployment.from_dict(sas_portal_gcp_project_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


