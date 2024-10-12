# UserManagedStatus

The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | [**List[ReplicaStatus]**](ReplicaStatus.md) | Output only. The list of replica statuses for the SecretVersion. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_managed_status import UserManagedStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UserManagedStatus from a JSON string
user_managed_status_instance = UserManagedStatus.from_json(json)
# print the JSON string representation of the object
print(UserManagedStatus.to_json())

# convert the object into a dict
user_managed_status_dict = user_managed_status_instance.to_dict()
# create an instance of UserManagedStatus from a dict
user_managed_status_from_dict = UserManagedStatus.from_dict(user_managed_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


