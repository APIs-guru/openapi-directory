# VideoSuggestionsTagSuggestion

A single tag suggestion with it's relevance information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_restricts** | **List[str]** | A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword. | [optional] 
**tag** | **str** | The keyword tag suggested for the video. | [optional] 

## Example

```python
from openapi_client.models.video_suggestions_tag_suggestion import VideoSuggestionsTagSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of VideoSuggestionsTagSuggestion from a JSON string
video_suggestions_tag_suggestion_instance = VideoSuggestionsTagSuggestion.from_json(json)
# print the JSON string representation of the object
print(VideoSuggestionsTagSuggestion.to_json())

# convert the object into a dict
video_suggestions_tag_suggestion_dict = video_suggestions_tag_suggestion_instance.to_dict()
# create an instance of VideoSuggestionsTagSuggestion from a dict
video_suggestions_tag_suggestion_from_dict = VideoSuggestionsTagSuggestion.from_dict(video_suggestions_tag_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


