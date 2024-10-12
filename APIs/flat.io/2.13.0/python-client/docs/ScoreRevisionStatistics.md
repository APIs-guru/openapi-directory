# ScoreRevisionStatistics

The statistics related to the score revision (additions and deletions) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | **float** | The number of additions operations in the last revision | [optional] 
**deletions** | **float** | The number of deletions operations in the last revision | [optional] 

## Example

```python
from openapi_client.models.score_revision_statistics import ScoreRevisionStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreRevisionStatistics from a JSON string
score_revision_statistics_instance = ScoreRevisionStatistics.from_json(json)
# print the JSON string representation of the object
print(ScoreRevisionStatistics.to_json())

# convert the object into a dict
score_revision_statistics_dict = score_revision_statistics_instance.to_dict()
# create an instance of ScoreRevisionStatistics from a dict
score_revision_statistics_from_dict = ScoreRevisionStatistics.from_dict(score_revision_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


