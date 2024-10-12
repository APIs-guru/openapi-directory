# ReplicaStatusBase

Information about the replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ReplicaKind**](ReplicaKind.md) |  | 

## Example

```python
from openapi_client.models.replica_status_base import ReplicaStatusBase

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaStatusBase from a JSON string
replica_status_base_instance = ReplicaStatusBase.from_json(json)
# print the JSON string representation of the object
print(ReplicaStatusBase.to_json())

# convert the object into a dict
replica_status_base_dict = replica_status_base_instance.to_dict()
# create an instance of ReplicaStatusBase from a dict
replica_status_base_from_dict = ReplicaStatusBase.from_dict(replica_status_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


