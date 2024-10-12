# ScoreCommentsCounts

A computed version of the total, unique, weekly and monthly number of comments added on the documents (this doesn't include inline comments). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly** | **float** | The monthly unique number of comments added to the score | [optional] 
**total** | **float** | The total number of comments added to the score | [optional] 
**unique** | **float** | The unique (1/user) number of comments added to the score | [optional] 
**weekly** | **float** | The weekly unique number of comments added to the score | [optional] 

## Example

```python
from openapi_client.models.score_comments_counts import ScoreCommentsCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreCommentsCounts from a JSON string
score_comments_counts_instance = ScoreCommentsCounts.from_json(json)
# print the JSON string representation of the object
print(ScoreCommentsCounts.to_json())

# convert the object into a dict
score_comments_counts_dict = score_comments_counts_instance.to_dict()
# create an instance of ScoreCommentsCounts from a dict
score_comments_counts_from_dict = ScoreCommentsCounts.from_dict(score_comments_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


