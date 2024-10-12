# GoogleCloudIntegrationsV1alphaProjectProperties

Metadata information for the given project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_enablement_state** | **str** | An enum value of what the enablement state is for the given project | [optional] 
**provisioned_regions** | **List[str]** | A list of provisioned regions on the current project | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_project_properties import GoogleCloudIntegrationsV1alphaProjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaProjectProperties from a JSON string
google_cloud_integrations_v1alpha_project_properties_instance = GoogleCloudIntegrationsV1alphaProjectProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaProjectProperties.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_project_properties_dict = google_cloud_integrations_v1alpha_project_properties_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaProjectProperties from a dict
google_cloud_integrations_v1alpha_project_properties_from_dict = GoogleCloudIntegrationsV1alphaProjectProperties.from_dict(google_cloud_integrations_v1alpha_project_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


