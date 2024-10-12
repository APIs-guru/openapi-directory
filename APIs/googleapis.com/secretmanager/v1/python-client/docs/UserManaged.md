# UserManaged

A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | [**List[Replica]**](Replica.md) | Required. The list of Replicas for this Secret. Cannot be empty. | [optional] 

## Example

```python
from openapi_client.models.user_managed import UserManaged

# TODO update the JSON string below
json = "{}"
# create an instance of UserManaged from a JSON string
user_managed_instance = UserManaged.from_json(json)
# print the JSON string representation of the object
print(UserManaged.to_json())

# convert the object into a dict
user_managed_dict = user_managed_instance.to_dict()
# create an instance of UserManaged from a dict
user_managed_from_dict = UserManaged.from_dict(user_managed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


