# GoogleCloudDialogflowCxV3beta1SessionEntityType

Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as \"custom entity types\"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GoogleCloudDialogflowCxV3beta1EntityTypeEntity]**](GoogleCloudDialogflowCxV3beta1EntityTypeEntity.md) | Required. The collection of entities to override or supplement the custom entity type. | [optional] 
**entity_override_mode** | **str** | Required. Indicates whether the additional data should override or supplement the custom entity type definition. | [optional] 
**name** | **str** | Required. The unique identifier of the session entity type. Format: &#x60;projects//locations//agents//sessions//entityTypes/&#x60; or &#x60;projects//locations//agents//environments//sessions//entityTypes/&#x60;. If &#x60;Environment ID&#x60; is not specified, we assume default &#39;draft&#39; environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_session_entity_type import GoogleCloudDialogflowCxV3beta1SessionEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SessionEntityType from a JSON string
google_cloud_dialogflow_cx_v3beta1_session_entity_type_instance = GoogleCloudDialogflowCxV3beta1SessionEntityType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SessionEntityType.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_session_entity_type_dict = google_cloud_dialogflow_cx_v3beta1_session_entity_type_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SessionEntityType from a dict
google_cloud_dialogflow_cx_v3beta1_session_entity_type_from_dict = GoogleCloudDialogflowCxV3beta1SessionEntityType.from_dict(google_cloud_dialogflow_cx_v3beta1_session_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


