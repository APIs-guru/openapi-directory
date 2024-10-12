# GoogleCloudIntegrationsV1alphaListConnectionsResponse

Response containing Connections listed by region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[GoogleCloudConnectorsV1Connection]**](GoogleCloudConnectorsV1Connection.md) | Connections. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_connections_response import GoogleCloudIntegrationsV1alphaListConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListConnectionsResponse from a JSON string
google_cloud_integrations_v1alpha_list_connections_response_instance = GoogleCloudIntegrationsV1alphaListConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListConnectionsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_connections_response_dict = google_cloud_integrations_v1alpha_list_connections_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListConnectionsResponse from a dict
google_cloud_integrations_v1alpha_list_connections_response_from_dict = GoogleCloudIntegrationsV1alphaListConnectionsResponse.from_dict(google_cloud_integrations_v1alpha_list_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


