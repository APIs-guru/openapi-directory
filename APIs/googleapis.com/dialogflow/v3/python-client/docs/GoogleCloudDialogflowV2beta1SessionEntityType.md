# GoogleCloudDialogflowV2beta1SessionEntityType

A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GoogleCloudDialogflowV2beta1EntityTypeEntity]**](GoogleCloudDialogflowV2beta1EntityTypeEntity.md) | Required. The collection of entities associated with this session entity type. | [optional] 
**entity_override_mode** | **str** | Required. Indicates whether the additional data should override or supplement the custom entity type definition. | [optional] 
**name** | **str** | Required. The unique identifier of this session entity type. Supported formats: - &#x60;projects//agent/sessions//entityTypes/&#x60; - &#x60;projects//locations//agent/sessions//entityTypes/&#x60; - &#x60;projects//agent/environments//users//sessions//entityTypes/&#x60; - &#x60;projects//locations//agent/environments/ /users//sessions//entityTypes/&#x60; If &#x60;Location ID&#x60; is not specified we assume default &#39;us&#39; location. If &#x60;Environment ID&#x60; is not specified, we assume default &#39;draft&#39; environment. If &#x60;User ID&#x60; is not specified, we assume default &#39;-&#39; user. &#x60;&#x60; must be the display name of an existing entity type in the same agent that will be overridden or supplemented. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_session_entity_type import GoogleCloudDialogflowV2beta1SessionEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SessionEntityType from a JSON string
google_cloud_dialogflow_v2beta1_session_entity_type_instance = GoogleCloudDialogflowV2beta1SessionEntityType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SessionEntityType.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_session_entity_type_dict = google_cloud_dialogflow_v2beta1_session_entity_type_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SessionEntityType from a dict
google_cloud_dialogflow_v2beta1_session_entity_type_from_dict = GoogleCloudDialogflowV2beta1SessionEntityType.from_dict(google_cloud_dialogflow_v2beta1_session_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


