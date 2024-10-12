# GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest

Request for LinkAppsScriptProject rpc call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script_id** | **str** | The id of the Apps Script project to be linked. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_link_apps_script_project_request import GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest from a JSON string
google_cloud_integrations_v1alpha_link_apps_script_project_request_instance = GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_link_apps_script_project_request_dict = google_cloud_integrations_v1alpha_link_apps_script_project_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest from a dict
google_cloud_integrations_v1alpha_link_apps_script_project_request_from_dict = GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest.from_dict(google_cloud_integrations_v1alpha_link_apps_script_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


