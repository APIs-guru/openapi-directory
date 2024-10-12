# GetCustomerSessionStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[CustomerSessionStats]**](CustomerSessionStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_customer_session_stats_response import GetCustomerSessionStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerSessionStatsResponse from a JSON string
get_customer_session_stats_response_instance = GetCustomerSessionStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerSessionStatsResponse.to_json())

# convert the object into a dict
get_customer_session_stats_response_dict = get_customer_session_stats_response_instance.to_dict()
# create an instance of GetCustomerSessionStatsResponse from a dict
get_customer_session_stats_response_from_dict = GetCustomerSessionStatsResponse.from_dict(get_customer_session_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


