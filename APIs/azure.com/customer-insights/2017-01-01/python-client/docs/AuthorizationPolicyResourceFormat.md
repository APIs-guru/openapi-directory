# AuthorizationPolicyResourceFormat

The authorization policy resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationPolicy**](AuthorizationPolicy.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_policy_resource_format import AuthorizationPolicyResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPolicyResourceFormat from a JSON string
authorization_policy_resource_format_instance = AuthorizationPolicyResourceFormat.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPolicyResourceFormat.to_json())

# convert the object into a dict
authorization_policy_resource_format_dict = authorization_policy_resource_format_instance.to_dict()
# create an instance of AuthorizationPolicyResourceFormat from a dict
authorization_policy_resource_format_from_dict = AuthorizationPolicyResourceFormat.from_dict(authorization_policy_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


