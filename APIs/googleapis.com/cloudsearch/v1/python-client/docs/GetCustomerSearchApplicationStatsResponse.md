# GetCustomerSearchApplicationStatsResponse

Response format for search application stats for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_search_application_count** | **str** | Average search application count for the given date range. | [optional] 
**stats** | [**List[CustomerSearchApplicationStats]**](CustomerSearchApplicationStats.md) | Search application stats by date. | [optional] 

## Example

```python
from openapi_client.models.get_customer_search_application_stats_response import GetCustomerSearchApplicationStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerSearchApplicationStatsResponse from a JSON string
get_customer_search_application_stats_response_instance = GetCustomerSearchApplicationStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerSearchApplicationStatsResponse.to_json())

# convert the object into a dict
get_customer_search_application_stats_response_dict = get_customer_search_application_stats_response_instance.to_dict()
# create an instance of GetCustomerSearchApplicationStatsResponse from a dict
get_customer_search_application_stats_response_from_dict = GetCustomerSearchApplicationStatsResponse.from_dict(get_customer_search_application_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


