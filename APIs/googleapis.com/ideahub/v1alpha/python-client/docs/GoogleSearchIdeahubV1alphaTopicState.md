# GoogleSearchIdeahubV1alphaTopicState

Represents topic state specific to a web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dismissed** | **bool** | Whether the topic is dismissed. | [optional] 
**name** | **str** | Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state} | [optional] 
**saved** | **bool** | Whether the topic is saved. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1alpha_topic_state import GoogleSearchIdeahubV1alphaTopicState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1alphaTopicState from a JSON string
google_search_ideahub_v1alpha_topic_state_instance = GoogleSearchIdeahubV1alphaTopicState.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1alphaTopicState.to_json())

# convert the object into a dict
google_search_ideahub_v1alpha_topic_state_dict = google_search_ideahub_v1alpha_topic_state_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1alphaTopicState from a dict
google_search_ideahub_v1alpha_topic_state_from_dict = GoogleSearchIdeahubV1alphaTopicState.from_dict(google_search_ideahub_v1alpha_topic_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


