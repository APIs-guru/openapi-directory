# GetCustomerQueryStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[CustomerQueryStats]**](CustomerQueryStats.md) |  | [optional] 
**total_query_count** | **str** | Total successful query count (status code 200) for the given date range. | [optional] 

## Example

```python
from openapi_client.models.get_customer_query_stats_response import GetCustomerQueryStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerQueryStatsResponse from a JSON string
get_customer_query_stats_response_instance = GetCustomerQueryStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerQueryStatsResponse.to_json())

# convert the object into a dict
get_customer_query_stats_response_dict = get_customer_query_stats_response_instance.to_dict()
# create an instance of GetCustomerQueryStatsResponse from a dict
get_customer_query_stats_response_from_dict = GetCustomerQueryStatsResponse.from_dict(get_customer_query_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


