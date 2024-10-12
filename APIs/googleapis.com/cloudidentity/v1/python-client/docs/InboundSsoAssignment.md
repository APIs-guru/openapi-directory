# InboundSsoAssignment

Targets with \"set\" SSO assignments and their respective assignments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Immutable. The customer. For example: &#x60;customers/C0123abc&#x60;. | [optional] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. | [optional] [readonly] 
**rank** | **int** | Must be zero (which is the default value so it can be omitted) for assignments with &#x60;target_org_unit&#x60; set and must be greater-than-or-equal-to one for assignments with &#x60;target_group&#x60; set. | [optional] 
**saml_sso_info** | [**SamlSsoInfo**](SamlSsoInfo.md) |  | [optional] 
**sign_in_behavior** | [**SignInBehavior**](SignInBehavior.md) |  | [optional] 
**sso_mode** | **str** | Inbound SSO behavior. | [optional] 
**target_group** | **str** | Immutable. Must be of the form &#x60;groups/{group}&#x60;. | [optional] 
**target_org_unit** | **str** | Immutable. Must be of the form &#x60;orgUnits/{org_unit}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.inbound_sso_assignment import InboundSsoAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of InboundSsoAssignment from a JSON string
inbound_sso_assignment_instance = InboundSsoAssignment.from_json(json)
# print the JSON string representation of the object
print(InboundSsoAssignment.to_json())

# convert the object into a dict
inbound_sso_assignment_dict = inbound_sso_assignment_instance.to_dict()
# create an instance of InboundSsoAssignment from a dict
inbound_sso_assignment_from_dict = InboundSsoAssignment.from_dict(inbound_sso_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


