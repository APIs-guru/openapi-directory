# GoogleCloudDialogflowV2BatchCreateEntitiesRequest

The request message for EntityTypes.BatchCreateEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GoogleCloudDialogflowV2EntityTypeEntity]**](GoogleCloudDialogflowV2EntityTypeEntity.md) | Required. The entities to create. | [optional] 
**language_code** | **str** | Optional. The language used to access language-specific data. If not specified, the agent&#39;s default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_create_entities_request import GoogleCloudDialogflowV2BatchCreateEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchCreateEntitiesRequest from a JSON string
google_cloud_dialogflow_v2_batch_create_entities_request_instance = GoogleCloudDialogflowV2BatchCreateEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchCreateEntitiesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_create_entities_request_dict = google_cloud_dialogflow_v2_batch_create_entities_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchCreateEntitiesRequest from a dict
google_cloud_dialogflow_v2_batch_create_entities_request_from_dict = GoogleCloudDialogflowV2BatchCreateEntitiesRequest.from_dict(google_cloud_dialogflow_v2_batch_create_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


