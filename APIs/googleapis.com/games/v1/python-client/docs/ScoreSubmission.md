# ScoreSubmission

A request to submit a score to leaderboards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#scoreSubmission&#x60;. | [optional] 
**leaderboard_id** | **str** | The leaderboard this score is being submitted to. | [optional] 
**score** | **str** | The new score being submitted. | [optional] 
**score_tag** | **str** | Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 
**signature** | **str** | Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 

## Example

```python
from openapi_client.models.score_submission import ScoreSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreSubmission from a JSON string
score_submission_instance = ScoreSubmission.from_json(json)
# print the JSON string representation of the object
print(ScoreSubmission.to_json())

# convert the object into a dict
score_submission_dict = score_submission_instance.to_dict()
# create an instance of ScoreSubmission from a dict
score_submission_from_dict = ScoreSubmission.from_dict(score_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


