# ClusterState

The state of a table's data in a particular cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_info** | [**List[EncryptionInfo]**](EncryptionInfo.md) | Output only. The encryption information for the table in this cluster. If the encryption key protecting this resource is customer managed, then its version can be rotated in Cloud Key Management Service (Cloud KMS). The primary version of the key and its status will be reflected here when changes propagate from Cloud KMS. | [optional] [readonly] 
**replication_state** | **str** | Output only. The state of replication for the table in this cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_state import ClusterState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterState from a JSON string
cluster_state_instance = ClusterState.from_json(json)
# print the JSON string representation of the object
print(ClusterState.to_json())

# convert the object into a dict
cluster_state_dict = cluster_state_instance.to_dict()
# create an instance of ClusterState from a dict
cluster_state_from_dict = ClusterState.from_dict(cluster_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


