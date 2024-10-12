# GoogleCloudIntegrationsV1alphaIntegration

The integration definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Required. If any integration version is published. | [optional] 
**description** | **str** | Optional. | [optional] 
**name** | **str** | Required. The resource name of the integration. | [optional] 
**update_time** | **str** | Output only. Auto-generated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_integration import GoogleCloudIntegrationsV1alphaIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaIntegration from a JSON string
google_cloud_integrations_v1alpha_integration_instance = GoogleCloudIntegrationsV1alphaIntegration.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaIntegration.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_integration_dict = google_cloud_integrations_v1alpha_integration_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaIntegration from a dict
google_cloud_integrations_v1alpha_integration_from_dict = GoogleCloudIntegrationsV1alphaIntegration.from_dict(google_cloud_integrations_v1alpha_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


