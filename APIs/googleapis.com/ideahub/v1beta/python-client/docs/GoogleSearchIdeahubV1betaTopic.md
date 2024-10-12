# GoogleSearchIdeahubV1betaTopic

Represents a Topic umbrella for a list of questions that a Creator may want to respond to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | String displayed to the creator indicating the name of the Topic. | [optional] 
**mid** | **str** | The mID of the topic. | [optional] 
**name** | **str** | Unique identifier for the topic. Format: topics/{topic} | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_topic import GoogleSearchIdeahubV1betaTopic

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaTopic from a JSON string
google_search_ideahub_v1beta_topic_instance = GoogleSearchIdeahubV1betaTopic.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaTopic.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_topic_dict = google_search_ideahub_v1beta_topic_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaTopic from a dict
google_search_ideahub_v1beta_topic_from_dict = GoogleSearchIdeahubV1betaTopic.from_dict(google_search_ideahub_v1beta_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


