# GoogleSearchIdeahubV1alphaIdeaState

Represents idea state specific to a web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dismissed** | **bool** | Whether the idea is dismissed. | [optional] 
**name** | **str** | Unique identifier for the idea state. Format: platforms/{platform}/properties/{property}/ideaStates/{idea_state} | [optional] 
**saved** | **bool** | Whether the idea is saved. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1alpha_idea_state import GoogleSearchIdeahubV1alphaIdeaState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1alphaIdeaState from a JSON string
google_search_ideahub_v1alpha_idea_state_instance = GoogleSearchIdeahubV1alphaIdeaState.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1alphaIdeaState.to_json())

# convert the object into a dict
google_search_ideahub_v1alpha_idea_state_dict = google_search_ideahub_v1alpha_idea_state_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1alphaIdeaState from a dict
google_search_ideahub_v1alpha_idea_state_from_dict = GoogleSearchIdeahubV1alphaIdeaState.from_dict(google_search_ideahub_v1alpha_idea_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


