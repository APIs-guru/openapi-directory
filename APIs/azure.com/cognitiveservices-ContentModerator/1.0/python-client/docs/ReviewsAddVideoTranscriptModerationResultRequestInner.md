# ReviewsAddVideoTranscriptModerationResultRequestInner

Schema items of the body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | [**List[ReviewsAddVideoTranscriptModerationResultRequestInnerTermsInner]**](ReviewsAddVideoTranscriptModerationResultRequestInnerTermsInner.md) | Optional metadata details. | 
**timestamp** | **str** | Timestamp of the image. | 

## Example

```python
from openapi_client.models.reviews_add_video_transcript_moderation_result_request_inner import ReviewsAddVideoTranscriptModerationResultRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsAddVideoTranscriptModerationResultRequestInner from a JSON string
reviews_add_video_transcript_moderation_result_request_inner_instance = ReviewsAddVideoTranscriptModerationResultRequestInner.from_json(json)
# print the JSON string representation of the object
print(ReviewsAddVideoTranscriptModerationResultRequestInner.to_json())

# convert the object into a dict
reviews_add_video_transcript_moderation_result_request_inner_dict = reviews_add_video_transcript_moderation_result_request_inner_instance.to_dict()
# create an instance of ReviewsAddVideoTranscriptModerationResultRequestInner from a dict
reviews_add_video_transcript_moderation_result_request_inner_from_dict = ReviewsAddVideoTranscriptModerationResultRequestInner.from_dict(reviews_add_video_transcript_moderation_result_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


