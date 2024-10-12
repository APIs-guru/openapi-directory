# GoogleCloudContactcenterinsightsV1Entity

The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The representative name for the entity. | [optional] 
**metadata** | **Dict[str, str]** | Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (&#x60;wikipedia_url&#x60;) and Knowledge Graph MID (&#x60;mid&#x60;), if they are available. For the metadata associated with other entity types, see the Type table below. | [optional] 
**salience** | **float** | The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. | [optional] 
**sentiment** | [**GoogleCloudContactcenterinsightsV1SentimentData**](GoogleCloudContactcenterinsightsV1SentimentData.md) |  | [optional] 
**type** | **str** | The entity type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_entity import GoogleCloudContactcenterinsightsV1Entity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1Entity from a JSON string
google_cloud_contactcenterinsights_v1_entity_instance = GoogleCloudContactcenterinsightsV1Entity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1Entity.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_entity_dict = google_cloud_contactcenterinsights_v1_entity_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1Entity from a dict
google_cloud_contactcenterinsights_v1_entity_from_dict = GoogleCloudContactcenterinsightsV1Entity.from_dict(google_cloud_contactcenterinsights_v1_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


