# GoogleSearchIdeahubV1betaIdea

A single Idea that we want to show the end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique identifier for the idea. Format: ideas/{ideaId} | [optional] 
**text** | **str** | The idea’s text. | [optional] 
**topics** | [**List[GoogleSearchIdeahubV1betaTopic]**](GoogleSearchIdeahubV1betaTopic.md) | The Topics that match the idea. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_idea import GoogleSearchIdeahubV1betaIdea

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaIdea from a JSON string
google_search_ideahub_v1beta_idea_instance = GoogleSearchIdeahubV1betaIdea.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaIdea.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_idea_dict = google_search_ideahub_v1beta_idea_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaIdea from a dict
google_search_ideahub_v1beta_idea_from_dict = GoogleSearchIdeahubV1betaIdea.from_dict(google_search_ideahub_v1beta_idea_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


