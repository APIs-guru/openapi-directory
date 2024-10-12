# GoogleCloudIntegrationsV1alphaRuntimeEntitySchema

Metadata of an entity, including a schema for its properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_field_schema** | **str** | The above schema, but for an array of the associated entity. | [optional] 
**entity** | **str** | Name of the entity. | [optional] 
**field_schema** | **str** | List of fields in the entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_runtime_entity_schema import GoogleCloudIntegrationsV1alphaRuntimeEntitySchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaRuntimeEntitySchema from a JSON string
google_cloud_integrations_v1alpha_runtime_entity_schema_instance = GoogleCloudIntegrationsV1alphaRuntimeEntitySchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaRuntimeEntitySchema.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_runtime_entity_schema_dict = google_cloud_integrations_v1alpha_runtime_entity_schema_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaRuntimeEntitySchema from a dict
google_cloud_integrations_v1alpha_runtime_entity_schema_from_dict = GoogleCloudIntegrationsV1alphaRuntimeEntitySchema.from_dict(google_cloud_integrations_v1alpha_runtime_entity_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


