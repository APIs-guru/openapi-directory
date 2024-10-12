# GoogleCloudIntegrationsV1alphaListSuspensionsResponse

Response for Suspensions.ListSuspensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results. | [optional] 
**suspensions** | [**List[GoogleCloudIntegrationsV1alphaSuspension]**](GoogleCloudIntegrationsV1alphaSuspension.md) | The suspensions for the relevant execution which the caller has permissions to view and resolve. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_suspensions_response import GoogleCloudIntegrationsV1alphaListSuspensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListSuspensionsResponse from a JSON string
google_cloud_integrations_v1alpha_list_suspensions_response_instance = GoogleCloudIntegrationsV1alphaListSuspensionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListSuspensionsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_suspensions_response_dict = google_cloud_integrations_v1alpha_list_suspensions_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListSuspensionsResponse from a dict
google_cloud_integrations_v1alpha_list_suspensions_response_from_dict = GoogleCloudIntegrationsV1alphaListSuspensionsResponse.from_dict(google_cloud_integrations_v1alpha_list_suspensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


