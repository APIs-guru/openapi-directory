# PoolNodeCountsListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[PoolNodeCounts]**](PoolNodeCounts.md) | A list of Compute Node counts by Pool. | [optional] 

## Example

```python
from openapi_client.models.pool_node_counts_list_result import PoolNodeCountsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PoolNodeCountsListResult from a JSON string
pool_node_counts_list_result_instance = PoolNodeCountsListResult.from_json(json)
# print the JSON string representation of the object
print(PoolNodeCountsListResult.to_json())

# convert the object into a dict
pool_node_counts_list_result_dict = pool_node_counts_list_result_instance.to_dict()
# create an instance of PoolNodeCountsListResult from a dict
pool_node_counts_list_result_from_dict = PoolNodeCountsListResult.from_dict(pool_node_counts_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


