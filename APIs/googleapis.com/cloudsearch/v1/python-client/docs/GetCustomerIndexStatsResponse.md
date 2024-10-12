# GetCustomerIndexStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_indexed_item_count** | **str** | Average item count for the given date range for which billing is done. | [optional] 
**stats** | [**List[CustomerIndexStats]**](CustomerIndexStats.md) | Summary of indexed item counts, one for each day in the requested range. | [optional] 

## Example

```python
from openapi_client.models.get_customer_index_stats_response import GetCustomerIndexStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerIndexStatsResponse from a JSON string
get_customer_index_stats_response_instance = GetCustomerIndexStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerIndexStatsResponse.to_json())

# convert the object into a dict
get_customer_index_stats_response_dict = get_customer_index_stats_response_instance.to_dict()
# create an instance of GetCustomerIndexStatsResponse from a dict
get_customer_index_stats_response_from_dict = GetCustomerIndexStatsResponse.from_dict(get_customer_index_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


