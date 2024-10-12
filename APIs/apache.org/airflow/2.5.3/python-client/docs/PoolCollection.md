# PoolCollection

Collection of pools.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**pools** | [**List[Pool]**](Pool.md) |  | [optional] 

## Example

```python
from openapi_client.models.pool_collection import PoolCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PoolCollection from a JSON string
pool_collection_instance = PoolCollection.from_json(json)
# print the JSON string representation of the object
print(PoolCollection.to_json())

# convert the object into a dict
pool_collection_dict = pool_collection_instance.to_dict()
# create an instance of PoolCollection from a dict
pool_collection_from_dict = PoolCollection.from_dict(pool_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


