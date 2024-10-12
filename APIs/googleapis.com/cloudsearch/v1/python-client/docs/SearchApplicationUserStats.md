# SearchApplicationUserStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**one_day_active_users_count** | **str** | The count of unique active users in the past one day | [optional] 
**seven_days_active_users_count** | **str** | The count of unique active users in the past seven days | [optional] 
**thirty_days_active_users_count** | **str** | The count of unique active users in the past thirty days | [optional] 

## Example

```python
from openapi_client.models.search_application_user_stats import SearchApplicationUserStats

# TODO update the JSON string below
json = "{}"
# create an instance of SearchApplicationUserStats from a JSON string
search_application_user_stats_instance = SearchApplicationUserStats.from_json(json)
# print the JSON string representation of the object
print(SearchApplicationUserStats.to_json())

# convert the object into a dict
search_application_user_stats_dict = search_application_user_stats_instance.to_dict()
# create an instance of SearchApplicationUserStats from a dict
search_application_user_stats_from_dict = SearchApplicationUserStats.from_dict(search_application_user_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


