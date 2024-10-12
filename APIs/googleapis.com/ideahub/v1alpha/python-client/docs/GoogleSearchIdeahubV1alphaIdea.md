# GoogleSearchIdeahubV1alphaIdea

A single Idea that we want to show the end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique identifier for the idea. Format: ideas/{ideaId} | [optional] 
**text** | **str** | The idea’s text. | [optional] 
**topics** | [**List[GoogleSearchIdeahubV1alphaTopic]**](GoogleSearchIdeahubV1alphaTopic.md) | The Topics that match the idea. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1alpha_idea import GoogleSearchIdeahubV1alphaIdea

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1alphaIdea from a JSON string
google_search_ideahub_v1alpha_idea_instance = GoogleSearchIdeahubV1alphaIdea.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1alphaIdea.to_json())

# convert the object into a dict
google_search_ideahub_v1alpha_idea_dict = google_search_ideahub_v1alpha_idea_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1alphaIdea from a dict
google_search_ideahub_v1alpha_idea_from_dict = GoogleSearchIdeahubV1alphaIdea.from_dict(google_search_ideahub_v1alpha_idea_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


