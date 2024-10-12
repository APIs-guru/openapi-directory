# AuthenticationRule

Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_without_credential** | **bool** | If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests. | [optional] 
**oauth** | [**OAuthRequirements**](OAuthRequirements.md) |  | [optional] 
**requirements** | [**List[AuthRequirement]**](AuthRequirement.md) | Requirements for additional authentication providers. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.authentication_rule import AuthenticationRule

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationRule from a JSON string
authentication_rule_instance = AuthenticationRule.from_json(json)
# print the JSON string representation of the object
print(AuthenticationRule.to_json())

# convert the object into a dict
authentication_rule_dict = authentication_rule_instance.to_dict()
# create an instance of AuthenticationRule from a dict
authentication_rule_from_dict = AuthenticationRule.from_dict(authentication_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


