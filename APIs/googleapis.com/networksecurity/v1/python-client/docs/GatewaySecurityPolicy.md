# GatewaySecurityPolicy

The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**name** | **str** | Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). | [optional] 
**tls_inspection_policy** | **str** | Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway_security_policy import GatewaySecurityPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GatewaySecurityPolicy from a JSON string
gateway_security_policy_instance = GatewaySecurityPolicy.from_json(json)
# print the JSON string representation of the object
print(GatewaySecurityPolicy.to_json())

# convert the object into a dict
gateway_security_policy_dict = gateway_security_policy_instance.to_dict()
# create an instance of GatewaySecurityPolicy from a dict
gateway_security_policy_from_dict = GatewaySecurityPolicy.from_dict(gateway_security_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


