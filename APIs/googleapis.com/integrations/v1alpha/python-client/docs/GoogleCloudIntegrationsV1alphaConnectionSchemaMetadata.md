# GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata

Metadata of runtime connection schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | List of actions. | [optional] 
**entities** | **List[str]** | List of entity names. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_connection_schema_metadata import GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata from a JSON string
google_cloud_integrations_v1alpha_connection_schema_metadata_instance = GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_connection_schema_metadata_dict = google_cloud_integrations_v1alpha_connection_schema_metadata_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata from a dict
google_cloud_integrations_v1alpha_connection_schema_metadata_from_dict = GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata.from_dict(google_cloud_integrations_v1alpha_connection_schema_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


