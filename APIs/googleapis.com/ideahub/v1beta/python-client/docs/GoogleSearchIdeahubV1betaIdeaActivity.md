# GoogleSearchIdeahubV1betaIdeaActivity

An idea activity entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ideas** | **List[str]** | The Idea IDs for this entry. If empty, topics should be set. | [optional] 
**name** | **str** | Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity} | [optional] 
**topics** | **List[str]** | The Topic IDs for this entry. If empty, ideas should be set. | [optional] 
**type** | **str** | The type of activity performed. | [optional] 
**uri** | **str** | The uri the activity relates to. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_idea_activity import GoogleSearchIdeahubV1betaIdeaActivity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaIdeaActivity from a JSON string
google_search_ideahub_v1beta_idea_activity_instance = GoogleSearchIdeahubV1betaIdeaActivity.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaIdeaActivity.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_idea_activity_dict = google_search_ideahub_v1beta_idea_activity_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaIdeaActivity from a dict
google_search_ideahub_v1beta_idea_activity_from_dict = GoogleSearchIdeahubV1betaIdeaActivity.from_dict(google_search_ideahub_v1beta_idea_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


