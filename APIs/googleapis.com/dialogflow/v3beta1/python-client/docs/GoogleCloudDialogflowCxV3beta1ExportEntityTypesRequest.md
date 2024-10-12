# GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest

The request message for EntityTypes.ExportEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | Optional. The data format of the exported entity types. If not specified, &#x60;BLOB&#x60; is assumed. | [optional] 
**entity_types** | **List[str]** | Required. The name of the entity types to export. Format: &#x60;projects//locations//agents//entityTypes/&#x60;. | [optional] 
**entity_types_content_inline** | **bool** | Optional. The option to return the serialized entity types inline. | [optional] 
**entity_types_uri** | **str** | Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the entity types to. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a write operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**language_code** | **str** | Optional. The language to retrieve the entity type for. The following fields are language dependent: * &#x60;EntityType.entities.value&#x60; * &#x60;EntityType.entities.synonyms&#x60; * &#x60;EntityType.excluded_phrases.value&#x60; If not specified, all language dependent fields will be retrieved. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_entity_types_request import GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_entity_types_request_instance = GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_entity_types_request_dict = google_cloud_dialogflow_cx_v3beta1_export_entity_types_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest from a dict
google_cloud_dialogflow_cx_v3beta1_export_entity_types_request_from_dict = GoogleCloudDialogflowCxV3beta1ExportEntityTypesRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_export_entity_types_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


