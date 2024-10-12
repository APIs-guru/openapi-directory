# ScoreViewsCounts

A computed version of the total, weekly, and monthly number of views of the score 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly** | **float** | The monthly number of views of the score | [optional] 
**total** | **float** | The total number of views of the score | [optional] 
**weekly** | **float** | The weekly number of views of the score | [optional] 

## Example

```python
from openapi_client.models.score_views_counts import ScoreViewsCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreViewsCounts from a JSON string
score_views_counts_instance = ScoreViewsCounts.from_json(json)
# print the JSON string representation of the object
print(ScoreViewsCounts.to_json())

# convert the object into a dict
score_views_counts_dict = score_views_counts_instance.to_dict()
# create an instance of ScoreViewsCounts from a dict
score_views_counts_from_dict = ScoreViewsCounts.from_dict(score_views_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


