# GoogleCloudDialogflowV2BatchDeleteEntitiesRequest

The request message for EntityTypes.BatchDeleteEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_values** | **List[str]** | Required. The reference &#x60;values&#x60; of the entities to delete. Note that these are not fully-qualified names, i.e. they don&#39;t start with &#x60;projects/&#x60;. | [optional] 
**language_code** | **str** | Optional. The language used to access language-specific data. If not specified, the agent&#39;s default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_delete_entities_request import GoogleCloudDialogflowV2BatchDeleteEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchDeleteEntitiesRequest from a JSON string
google_cloud_dialogflow_v2_batch_delete_entities_request_instance = GoogleCloudDialogflowV2BatchDeleteEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchDeleteEntitiesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_delete_entities_request_dict = google_cloud_dialogflow_v2_batch_delete_entities_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchDeleteEntitiesRequest from a dict
google_cloud_dialogflow_v2_batch_delete_entities_request_from_dict = GoogleCloudDialogflowV2BatchDeleteEntitiesRequest.from_dict(google_cloud_dialogflow_v2_batch_delete_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


