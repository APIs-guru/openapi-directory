# GoogleCloudDialogflowV2EntityType

Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_expansion_mode** | **str** | Optional. Indicates whether the entity type can be automatically expanded. | [optional] 
**display_name** | **str** | Required. The name of the entity type. | [optional] 
**enable_fuzzy_extraction** | **bool** | Optional. Enables fuzzy entity extraction during classification. | [optional] 
**entities** | [**List[GoogleCloudDialogflowV2EntityTypeEntity]**](GoogleCloudDialogflowV2EntityTypeEntity.md) | Optional. The collection of entity entries associated with the entity type. | [optional] 
**kind** | **str** | Required. Indicates the kind of entity type. | [optional] 
**name** | **str** | The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: &#x60;projects//agent/entityTypes/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_entity_type import GoogleCloudDialogflowV2EntityType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EntityType from a JSON string
google_cloud_dialogflow_v2_entity_type_instance = GoogleCloudDialogflowV2EntityType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EntityType.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_entity_type_dict = google_cloud_dialogflow_v2_entity_type_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EntityType from a dict
google_cloud_dialogflow_v2_entity_type_from_dict = GoogleCloudDialogflowV2EntityType.from_dict(google_cloud_dialogflow_v2_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


