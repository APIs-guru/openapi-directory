# GoogleCloudDialogflowV2BatchUpdateEntitiesRequest

The request message for EntityTypes.BatchUpdateEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GoogleCloudDialogflowV2EntityTypeEntity]**](GoogleCloudDialogflowV2EntityTypeEntity.md) | Required. The entities to update or create. | [optional] 
**language_code** | **str** | Optional. The language used to access language-specific data. If not specified, the agent&#39;s default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). | [optional] 
**update_mask** | **str** | Optional. The mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_update_entities_request import GoogleCloudDialogflowV2BatchUpdateEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchUpdateEntitiesRequest from a JSON string
google_cloud_dialogflow_v2_batch_update_entities_request_instance = GoogleCloudDialogflowV2BatchUpdateEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchUpdateEntitiesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_update_entities_request_dict = google_cloud_dialogflow_v2_batch_update_entities_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchUpdateEntitiesRequest from a dict
google_cloud_dialogflow_v2_batch_update_entities_request_from_dict = GoogleCloudDialogflowV2BatchUpdateEntitiesRequest.from_dict(google_cloud_dialogflow_v2_batch_update_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


