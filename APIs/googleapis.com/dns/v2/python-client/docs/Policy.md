# Policy

A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_name_server_config** | [**PolicyAlternativeNameServerConfig**](PolicyAlternativeNameServerConfig.md) |  | [optional] 
**description** | **str** | A mutable string of at most 1024 characters associated with this resource for the user&#39;s convenience. Has no effect on the policy&#39;s function. | [optional] 
**enable_inbound_forwarding** | **bool** | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy. | [optional] 
**enable_logging** | **bool** | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. | [optional] 
**id** | **str** | Unique identifier for the resource; defined by the server (output only). | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#policy']
**name** | **str** | User-assigned name for this policy. | [optional] 
**networks** | [**List[PolicyNetwork]**](PolicyNetwork.md) | List of network names specifying networks to which this policy is applied. | [optional] 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


