# ScoreSummary

A summary of the score details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_url** | **str** | The url where the score can be viewed in a web browser | [optional] 
**id** | **str** | The unique identifier of the score | [optional] 
**privacy** | [**ScorePrivacy**](ScorePrivacy.md) |  | [optional] 
**sharing_key** | **str** | The private sharing key of the score (available when the &#x60;privacy&#x60; mode is set to &#x60;privateLink&#x60;) | [optional] 
**title** | **str** | The title of the score | [optional] 
**user** | [**UserPublicSummary**](UserPublicSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.score_summary import ScoreSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreSummary from a JSON string
score_summary_instance = ScoreSummary.from_json(json)
# print the JSON string representation of the object
print(ScoreSummary.to_json())

# convert the object into a dict
score_summary_dict = score_summary_instance.to_dict()
# create an instance of ScoreSummary from a dict
score_summary_from_dict = ScoreSummary.from_dict(score_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


