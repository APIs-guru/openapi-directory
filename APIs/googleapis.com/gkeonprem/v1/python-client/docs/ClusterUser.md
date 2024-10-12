# ClusterUser

ClusterUser configures user principals for an RBAC policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Required. The name of the user, e.g. &#x60;my-gcp-id@gmail.com&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cluster_user import ClusterUser

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUser from a JSON string
cluster_user_instance = ClusterUser.from_json(json)
# print the JSON string representation of the object
print(ClusterUser.to_json())

# convert the object into a dict
cluster_user_dict = cluster_user_instance.to_dict()
# create an instance of ClusterUser from a dict
cluster_user_from_dict = ClusterUser.from_dict(cluster_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


