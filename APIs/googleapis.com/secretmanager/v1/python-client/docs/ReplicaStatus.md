# ReplicaStatus

Describes the status of a user-managed replica for the SecretVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_managed_encryption** | [**CustomerManagedEncryptionStatus**](CustomerManagedEncryptionStatus.md) |  | [optional] 
**location** | **str** | Output only. The canonical ID of the replica location. For example: &#x60;\&quot;us-east1\&quot;&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replica_status import ReplicaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaStatus from a JSON string
replica_status_instance = ReplicaStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicaStatus.to_json())

# convert the object into a dict
replica_status_dict = replica_status_instance.to_dict()
# create an instance of ReplicaStatus from a dict
replica_status_from_dict = ReplicaStatus.from_dict(replica_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


