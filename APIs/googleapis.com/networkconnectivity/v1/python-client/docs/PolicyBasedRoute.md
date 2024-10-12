# PolicyBasedRoute

Policy-based routes route L4 network traffic based on not just destination IP address, but also source IP address, protocol, and more. If a policy-based route conflicts with other types of routes, the policy-based route always take precedence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the policy-based route was created. | [optional] [readonly] 
**description** | **str** | Optional. An optional description of this resource. Provide this field when you create the resource. | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**interconnect_attachment** | [**InterconnectAttachment**](InterconnectAttachment.md) |  | [optional] 
**kind** | **str** | Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources. | [optional] [readonly] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. A unique name of the resource in the form of &#x60;projects/{project_number}/locations/global/PolicyBasedRoutes/{policy_based_route_id}&#x60; | [optional] 
**network** | **str** | Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. | [optional] 
**next_hop_ilb_ip** | **str** | Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported. | [optional] 
**next_hop_other_routes** | **str** | Optional. Other routes that will be referenced to determine the next hop of the packet. | [optional] 
**priority** | **int** | Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. | [optional] 
**self_link** | **str** | Output only. Server-defined fully-qualified URL for this resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the policy-based route was updated. | [optional] [readonly] 
**virtual_machine** | [**VirtualMachine**](VirtualMachine.md) |  | [optional] 
**warnings** | [**List[Warnings]**](Warnings.md) | Output only. If potential misconfigurations are detected for this route, this field will be populated with warning messages. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_based_route import PolicyBasedRoute

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyBasedRoute from a JSON string
policy_based_route_instance = PolicyBasedRoute.from_json(json)
# print the JSON string representation of the object
print(PolicyBasedRoute.to_json())

# convert the object into a dict
policy_based_route_dict = policy_based_route_instance.to_dict()
# create an instance of PolicyBasedRoute from a dict
policy_based_route_from_dict = PolicyBasedRoute.from_dict(policy_based_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


