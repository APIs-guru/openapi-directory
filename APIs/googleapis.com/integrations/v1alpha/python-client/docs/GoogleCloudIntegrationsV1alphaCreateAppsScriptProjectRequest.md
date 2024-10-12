# GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest

Request for CreateAppsScriptProject rpc call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps_script_project** | **str** | The name of the Apps Script project to be created. | [optional] 
**auth_config_id** | **str** | The auth config id necessary to fetch the necessary credentials to create the project for external clients | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_create_apps_script_project_request import GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest from a JSON string
google_cloud_integrations_v1alpha_create_apps_script_project_request_instance = GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_create_apps_script_project_request_dict = google_cloud_integrations_v1alpha_create_apps_script_project_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest from a dict
google_cloud_integrations_v1alpha_create_apps_script_project_request_from_dict = GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest.from_dict(google_cloud_integrations_v1alpha_create_apps_script_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


