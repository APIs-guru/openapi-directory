# Oauth1PermissionsProblem

A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.oauth1_permissions_problem import Oauth1PermissionsProblem

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth1PermissionsProblem from a JSON string
oauth1_permissions_problem_instance = Oauth1PermissionsProblem.from_json(json)
# print the JSON string representation of the object
print(Oauth1PermissionsProblem.to_json())

# convert the object into a dict
oauth1_permissions_problem_dict = oauth1_permissions_problem_instance.to_dict()
# create an instance of Oauth1PermissionsProblem from a dict
oauth1_permissions_problem_from_dict = Oauth1PermissionsProblem.from_dict(oauth1_permissions_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


