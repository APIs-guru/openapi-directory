# SasPortalListGcpProjectDeploymentsResponse

Response for [ListGcpProjectDeployments].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[SasPortalGcpProjectDeployment]**](SasPortalGcpProjectDeployment.md) | Optional. Deployments associated with the GCP project | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_gcp_project_deployments_response import SasPortalListGcpProjectDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListGcpProjectDeploymentsResponse from a JSON string
sas_portal_list_gcp_project_deployments_response_instance = SasPortalListGcpProjectDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListGcpProjectDeploymentsResponse.to_json())

# convert the object into a dict
sas_portal_list_gcp_project_deployments_response_dict = sas_portal_list_gcp_project_deployments_response_instance.to_dict()
# create an instance of SasPortalListGcpProjectDeploymentsResponse from a dict
sas_portal_list_gcp_project_deployments_response_from_dict = SasPortalListGcpProjectDeploymentsResponse.from_dict(sas_portal_list_gcp_project_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


