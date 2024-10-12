# GoogleCloudDialogflowV2beta1EntityTypeEntity

An **entity entry** for an associated entity type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**synonyms** | **List[str]** | Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and &#x60;value&#x60; is *scallions*, a synonym could be *green onions*. For &#x60;KIND_LIST&#x60; entity types: * This collection must contain exactly one synonym equal to &#x60;value&#x60;. | [optional] 
**value** | **str** | Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For &#x60;KIND_MAP&#x60; entity types: * A reference value to be used in place of synonyms. For &#x60;KIND_LIST&#x60; entity types: * A string that can contain references to other entity types (with or without aliases). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_entity_type_entity import GoogleCloudDialogflowV2beta1EntityTypeEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1EntityTypeEntity from a JSON string
google_cloud_dialogflow_v2beta1_entity_type_entity_instance = GoogleCloudDialogflowV2beta1EntityTypeEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1EntityTypeEntity.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_entity_type_entity_dict = google_cloud_dialogflow_v2beta1_entity_type_entity_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1EntityTypeEntity from a dict
google_cloud_dialogflow_v2beta1_entity_type_entity_from_dict = GoogleCloudDialogflowV2beta1EntityTypeEntity.from_dict(google_cloud_dialogflow_v2beta1_entity_type_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


