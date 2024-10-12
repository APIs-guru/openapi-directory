# GoogleCloudVideointelligenceV1p3beta1Celebrity

Celebrity definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Textual description of additional information about the celebrity, if applicable. | [optional] 
**display_name** | **str** | The celebrity name. | [optional] 
**name** | **str** | The resource name of the celebrity. Have the format &#x60;video-intelligence/kg-mid&#x60; indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_celebrity import GoogleCloudVideointelligenceV1p3beta1Celebrity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1Celebrity from a JSON string
google_cloud_videointelligence_v1p3beta1_celebrity_instance = GoogleCloudVideointelligenceV1p3beta1Celebrity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1Celebrity.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_celebrity_dict = google_cloud_videointelligence_v1p3beta1_celebrity_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1Celebrity from a dict
google_cloud_videointelligence_v1p3beta1_celebrity_from_dict = GoogleCloudVideointelligenceV1p3beta1Celebrity.from_dict(google_cloud_videointelligence_v1p3beta1_celebrity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


