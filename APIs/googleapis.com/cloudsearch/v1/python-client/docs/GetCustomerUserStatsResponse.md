# GetCustomerUserStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[CustomerUserStats]**](CustomerUserStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_customer_user_stats_response import GetCustomerUserStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerUserStatsResponse from a JSON string
get_customer_user_stats_response_instance = GetCustomerUserStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerUserStatsResponse.to_json())

# convert the object into a dict
get_customer_user_stats_response_dict = get_customer_user_stats_response_instance.to_dict()
# create an instance of GetCustomerUserStatsResponse from a dict
get_customer_user_stats_response_from_dict = GetCustomerUserStatsResponse.from_dict(get_customer_user_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


