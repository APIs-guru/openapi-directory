# AuthorizationPolicy

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Required. The action to take when a rule match is found. Possible values are \&quot;ALLOW\&quot; or \&quot;DENY\&quot;. | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the AuthorizationPolicy resource. | [optional] 
**name** | **str** | Required. Name of the AuthorizationPolicy resource. It matches pattern &#x60;projects/{project}/locations/{location}/authorizationPolicies/&#x60;. | [optional] 
**rules** | [**List[Rule]**](Rule.md) | Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the &#39;action&#39; field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the &#x60;action&#x60; field will be applied on every request. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_policy import AuthorizationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPolicy from a JSON string
authorization_policy_instance = AuthorizationPolicy.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPolicy.to_json())

# convert the object into a dict
authorization_policy_dict = authorization_policy_instance.to_dict()
# create an instance of AuthorizationPolicy from a dict
authorization_policy_from_dict = AuthorizationPolicy.from_dict(authorization_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


