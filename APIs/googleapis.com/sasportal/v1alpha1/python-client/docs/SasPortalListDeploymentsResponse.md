# SasPortalListDeploymentsResponse

Response for ListDeployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[SasPortalDeployment]**](SasPortalDeployment.md) | The deployments that match the request. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_deployments_response import SasPortalListDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListDeploymentsResponse from a JSON string
sas_portal_list_deployments_response_instance = SasPortalListDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListDeploymentsResponse.to_json())

# convert the object into a dict
sas_portal_list_deployments_response_dict = sas_portal_list_deployments_response_instance.to_dict()
# create an instance of SasPortalListDeploymentsResponse from a dict
sas_portal_list_deployments_response_from_dict = SasPortalListDeploymentsResponse.from_dict(sas_portal_list_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


