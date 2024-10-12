# CustomerIndexStats

Aggregation of items by status code as of the specified date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**item_count_by_status** | [**List[ItemCountByStatus]**](ItemCountByStatus.md) | Number of items aggregrated by status code. | [optional] 

## Example

```python
from openapi_client.models.customer_index_stats import CustomerIndexStats

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerIndexStats from a JSON string
customer_index_stats_instance = CustomerIndexStats.from_json(json)
# print the JSON string representation of the object
print(CustomerIndexStats.to_json())

# convert the object into a dict
customer_index_stats_dict = customer_index_stats_instance.to_dict()
# create an instance of CustomerIndexStats from a dict
customer_index_stats_from_dict = CustomerIndexStats.from_dict(customer_index_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


