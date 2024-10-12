# Authorization

Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_users** | [**List[ClusterUser]**](ClusterUser.md) | For VMware and bare metal user clusters, users will be granted the cluster-admin role on the cluster, which provides full administrative access to the cluster. For bare metal admin clusters, users will be granted the cluster-view role, which limits users to read-only access. | [optional] 

## Example

```python
from openapi_client.models.authorization import Authorization

# TODO update the JSON string below
json = "{}"
# create an instance of Authorization from a JSON string
authorization_instance = Authorization.from_json(json)
# print the JSON string representation of the object
print(Authorization.to_json())

# convert the object into a dict
authorization_dict = authorization_instance.to_dict()
# create an instance of Authorization from a dict
authorization_from_dict = Authorization.from_dict(authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


