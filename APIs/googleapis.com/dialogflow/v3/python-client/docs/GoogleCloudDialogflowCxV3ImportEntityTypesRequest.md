# GoogleCloudDialogflowCxV3ImportEntityTypesRequest

The request message for EntityTypes.ImportEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types_content** | [**GoogleCloudDialogflowCxV3InlineSource**](GoogleCloudDialogflowCxV3InlineSource.md) |  | [optional] 
**entity_types_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import entity types from. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**merge_option** | **str** | Required. Merge option for importing entity types. | [optional] 
**target_entity_type** | **str** | Optional. The target entity type to import into. Format: &#x60;projects//locations//agents//entity_types/&#x60;. If set, there should be only one entity type included in entity_types, of which the type should match the type of the target entity type. All entities in the imported entity type will be added to the target entity type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_entity_types_request import GoogleCloudDialogflowCxV3ImportEntityTypesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesRequest from a JSON string
google_cloud_dialogflow_cx_v3_import_entity_types_request_instance = GoogleCloudDialogflowCxV3ImportEntityTypesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportEntityTypesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_entity_types_request_dict = google_cloud_dialogflow_cx_v3_import_entity_types_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesRequest from a dict
google_cloud_dialogflow_cx_v3_import_entity_types_request_from_dict = GoogleCloudDialogflowCxV3ImportEntityTypesRequest.from_dict(google_cloud_dialogflow_cx_v3_import_entity_types_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


