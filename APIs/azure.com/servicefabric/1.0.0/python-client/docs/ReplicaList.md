# ReplicaList

The list of the replica

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** |  | [optional] 
**items** | [**List[Replica]**](Replica.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica_list import ReplicaList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaList from a JSON string
replica_list_instance = ReplicaList.from_json(json)
# print the JSON string representation of the object
print(ReplicaList.to_json())

# convert the object into a dict
replica_list_dict = replica_list_instance.to_dict()
# create an instance of ReplicaList from a dict
replica_list_from_dict = ReplicaList.from_dict(replica_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


