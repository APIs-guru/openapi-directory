# GoogleCloudIntegrationsV1alphaRuntimeActionSchema

Metadata of an action, including schemas for its inputs and outputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Name of the action. | [optional] 
**input_schema** | **str** | Input parameter schema for the action. | [optional] 
**output_schema** | **str** | Output parameter schema for the action. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_runtime_action_schema import GoogleCloudIntegrationsV1alphaRuntimeActionSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaRuntimeActionSchema from a JSON string
google_cloud_integrations_v1alpha_runtime_action_schema_instance = GoogleCloudIntegrationsV1alphaRuntimeActionSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaRuntimeActionSchema.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_runtime_action_schema_dict = google_cloud_integrations_v1alpha_runtime_action_schema_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaRuntimeActionSchema from a dict
google_cloud_integrations_v1alpha_runtime_action_schema_from_dict = GoogleCloudIntegrationsV1alphaRuntimeActionSchema.from_dict(google_cloud_integrations_v1alpha_runtime_action_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


