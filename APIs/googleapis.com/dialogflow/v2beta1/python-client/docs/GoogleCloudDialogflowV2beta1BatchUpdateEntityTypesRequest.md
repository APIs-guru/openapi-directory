# GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest

The request message for EntityTypes.BatchUpdateEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type_batch_inline** | [**GoogleCloudDialogflowV2beta1EntityTypeBatch**](GoogleCloudDialogflowV2beta1EntityTypeBatch.md) |  | [optional] 
**entity_type_batch_uri** | **str** | The URI to a Google Cloud Storage file containing entity types to update or create. The file format can either be a serialized proto (of EntityBatch type) or a JSON object. Note: The URI must start with \&quot;gs://\&quot;. | [optional] 
**language_code** | **str** | Optional. The language used to access language-specific data. If not specified, the agent&#39;s default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). | [optional] 
**update_mask** | **str** | Optional. The mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_batch_update_entity_types_request import GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest from a JSON string
google_cloud_dialogflow_v2beta1_batch_update_entity_types_request_instance = GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_batch_update_entity_types_request_dict = google_cloud_dialogflow_v2beta1_batch_update_entity_types_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest from a dict
google_cloud_dialogflow_v2beta1_batch_update_entity_types_request_from_dict = GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest.from_dict(google_cloud_dialogflow_v2beta1_batch_update_entity_types_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


