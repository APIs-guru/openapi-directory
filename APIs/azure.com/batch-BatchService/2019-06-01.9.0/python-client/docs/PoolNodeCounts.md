# PoolNodeCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated** | [**NodeCounts**](NodeCounts.md) |  | [optional] 
**low_priority** | [**NodeCounts**](NodeCounts.md) |  | [optional] 
**pool_id** | **str** |  | 

## Example

```python
from openapi_client.models.pool_node_counts import PoolNodeCounts

# TODO update the JSON string below
json = "{}"
# create an instance of PoolNodeCounts from a JSON string
pool_node_counts_instance = PoolNodeCounts.from_json(json)
# print the JSON string representation of the object
print(PoolNodeCounts.to_json())

# convert the object into a dict
pool_node_counts_dict = pool_node_counts_instance.to_dict()
# create an instance of PoolNodeCounts from a dict
pool_node_counts_from_dict = PoolNodeCounts.from_dict(pool_node_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


