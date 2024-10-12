# APIRankHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_standard_score** | **float** | The Average Standard score calculated by SchoolDigger (see: https://www.schooldigger.com/aboutrankingmethodology.aspx) | [optional] 
**rank** | **int** | Statewide rank of this School | [optional] 
**rank_level** | **str** | The level for which this school is ranked (Elementary, Middle, High) | [optional] 
**rank_of** | **int** | Count of schools ranked at this state/level | [optional] 
**rank_stars** | **int** | The number of stars SchoolDigger awarded in the ranking of the school (0-5, 5 is best) | [optional] 
**rank_statewide_percentage** | **float** | Percentile of this school&#39;s rank (e.g. this school performed better than (x)% of this state&#39;s elementary schools) | [optional] 
**year** | **int** | School year (2017 - 2016-17) | [optional] 

## Example

```python
from openapi_client.models.api_rank_history import APIRankHistory

# TODO update the JSON string below
json = "{}"
# create an instance of APIRankHistory from a JSON string
api_rank_history_instance = APIRankHistory.from_json(json)
# print the JSON string representation of the object
print(APIRankHistory.to_json())

# convert the object into a dict
api_rank_history_dict = api_rank_history_instance.to_dict()
# create an instance of APIRankHistory from a dict
api_rank_history_from_dict = APIRankHistory.from_dict(api_rank_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


