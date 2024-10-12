# ClusterKey

Cosmos DB Cassandra table cluster key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Cosmos DB Cassandra table cluster key | [optional] 
**order_by** | **str** | Order of the Cosmos DB Cassandra table cluster key, only support \&quot;Asc\&quot; and \&quot;Desc\&quot; | [optional] 

## Example

```python
from openapi_client.models.cluster_key import ClusterKey

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterKey from a JSON string
cluster_key_instance = ClusterKey.from_json(json)
# print the JSON string representation of the object
print(ClusterKey.to_json())

# convert the object into a dict
cluster_key_dict = cluster_key_instance.to_dict()
# create an instance of ClusterKey from a dict
cluster_key_from_dict = ClusterKey.from_dict(cluster_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


