# GoogleSearchIdeahubV1betaTopicState

Represents topic state specific to a web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dismissed** | **bool** | Whether the topic is dismissed. | [optional] 
**name** | **str** | Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state} | [optional] 
**saved** | **bool** | Whether the topic is saved. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_topic_state import GoogleSearchIdeahubV1betaTopicState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaTopicState from a JSON string
google_search_ideahub_v1beta_topic_state_instance = GoogleSearchIdeahubV1betaTopicState.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaTopicState.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_topic_state_dict = google_search_ideahub_v1beta_topic_state_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaTopicState from a dict
google_search_ideahub_v1beta_topic_state_from_dict = GoogleSearchIdeahubV1betaTopicState.from_dict(google_search_ideahub_v1beta_topic_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


