# GoogleCloudVideointelligenceV1beta2Entity

Detected entity from video analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Textual description, e.g., &#x60;Fixed-gear bicycle&#x60;. | [optional] 
**entity_id** | **str** | Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). | [optional] 
**language_code** | **str** | Language code for &#x60;description&#x60; in BCP-47 format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_entity import GoogleCloudVideointelligenceV1beta2Entity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2Entity from a JSON string
google_cloud_videointelligence_v1beta2_entity_instance = GoogleCloudVideointelligenceV1beta2Entity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2Entity.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_entity_dict = google_cloud_videointelligence_v1beta2_entity_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2Entity from a dict
google_cloud_videointelligence_v1beta2_entity_from_dict = GoogleCloudVideointelligenceV1beta2Entity.from_dict(google_cloud_videointelligence_v1beta2_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


