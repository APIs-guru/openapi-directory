# GatewaySecurityPolicyRule

The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_matcher** | **str** | Optional. CEL expression for matching on L7/application level criteria. | [optional] 
**basic_profile** | **str** | Required. Profile which tells what the primitive action should be. | [optional] 
**create_time** | **str** | Output only. Time when the rule was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**enabled** | **bool** | Required. Whether the rule is enforced. | [optional] 
**name** | **str** | Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). | [optional] 
**priority** | **int** | Required. Priority of the rule. Lower number corresponds to higher precedence. | [optional] 
**session_matcher** | **str** | Required. CEL expression for matching on session criteria. | [optional] 
**tls_inspection_enabled** | **bool** | Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. | [optional] 
**update_time** | **str** | Output only. Time when the rule was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway_security_policy_rule import GatewaySecurityPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of GatewaySecurityPolicyRule from a JSON string
gateway_security_policy_rule_instance = GatewaySecurityPolicyRule.from_json(json)
# print the JSON string representation of the object
print(GatewaySecurityPolicyRule.to_json())

# convert the object into a dict
gateway_security_policy_rule_dict = gateway_security_policy_rule_instance.to_dict()
# create an instance of GatewaySecurityPolicyRule from a dict
gateway_security_policy_rule_from_dict = GatewaySecurityPolicyRule.from_dict(gateway_security_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


