# CustomerUserStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**one_day_active_users_count** | **str** | The count of unique active users in the past one day | [optional] 
**seven_days_active_users_count** | **str** | The count of unique active users in the past seven days | [optional] 
**thirty_days_active_users_count** | **str** | The count of unique active users in the past thirty days | [optional] 

## Example

```python
from openapi_client.models.customer_user_stats import CustomerUserStats

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUserStats from a JSON string
customer_user_stats_instance = CustomerUserStats.from_json(json)
# print the JSON string representation of the object
print(CustomerUserStats.to_json())

# convert the object into a dict
customer_user_stats_dict = customer_user_stats_instance.to_dict()
# create an instance of CustomerUserStats from a dict
customer_user_stats_from_dict = CustomerUserStats.from_dict(customer_user_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


