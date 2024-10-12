# ScorePlaysCounts

A computed version of the total, weekly, and monthly number of plays of the score 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly** | **float** | The monthly number of plays of the score | [optional] 
**total** | **float** | The total number of plays of the score | [optional] 
**weekly** | **float** | The weekly number of plays of the score | [optional] 

## Example

```python
from openapi_client.models.score_plays_counts import ScorePlaysCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ScorePlaysCounts from a JSON string
score_plays_counts_instance = ScorePlaysCounts.from_json(json)
# print the JSON string representation of the object
print(ScorePlaysCounts.to_json())

# convert the object into a dict
score_plays_counts_dict = score_plays_counts_instance.to_dict()
# create an instance of ScorePlaysCounts from a dict
score_plays_counts_from_dict = ScorePlaysCounts.from_dict(score_plays_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


