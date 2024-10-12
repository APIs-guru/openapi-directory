# CustomerQueryStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**query_count_by_status** | [**List[QueryCountByStatus]**](QueryCountByStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_query_stats import CustomerQueryStats

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerQueryStats from a JSON string
customer_query_stats_instance = CustomerQueryStats.from_json(json)
# print the JSON string representation of the object
print(CustomerQueryStats.to_json())

# convert the object into a dict
customer_query_stats_dict = customer_query_stats_instance.to_dict()
# create an instance of CustomerQueryStats from a dict
customer_query_stats_from_dict = CustomerQueryStats.from_dict(customer_query_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


