# APILEARankHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rank** | **int** | Statewide rank of this district | [optional] 
**rank_of** | **int** | Count of district ranked in this state | [optional] 
**rank_score** | **float** | The rank score calculated by SchoolDigger (see https://www.schooldigger.com/aboutranking.aspx) | [optional] 
**rank_stars** | **int** | The number of stars SchoolDigger awarded in the ranking of the district (0-5, 5 is best) | [optional] 
**rank_statewide_percentage** | **float** | Percentile of this district&#39;s rank (e.g. this district performed better than (x)% of this state&#39;s districts) | [optional] 
**year** | **int** | School year (2017 - 2016-17) | [optional] 

## Example

```python
from openapi_client.models.apilea_rank_history import APILEARankHistory

# TODO update the JSON string below
json = "{}"
# create an instance of APILEARankHistory from a JSON string
apilea_rank_history_instance = APILEARankHistory.from_json(json)
# print the JSON string representation of the object
print(APILEARankHistory.to_json())

# convert the object into a dict
apilea_rank_history_dict = apilea_rank_history_instance.to_dict()
# create an instance of APILEARankHistory from a dict
apilea_rank_history_from_dict = APILEARankHistory.from_dict(apilea_rank_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


