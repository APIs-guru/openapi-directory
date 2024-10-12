# FirewallEndpoint

Message describing Endpoint object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_networks** | **List[str]** | Output only. List of networks that are associated with this endpoint in the local zone. This is a projection of the FirewallEndpointAssociations pointing at this endpoint. A network will only appear in this list after traffic routing is fully configured. Format: projects/{project}/global/networks/{name}. | [optional] [readonly] 
**associations** | [**List[FirewallEndpointAssociationReference]**](FirewallEndpointAssociationReference.md) | Output only. List of FirewallEndpointAssociations that are associated to this endpoint. An association will only appear in this list after traffic routing is fully configured. | [optional] [readonly] 
**billing_project_id** | **str** | Required. Project to bill on endpoint uptime usage. | [optional] 
**create_time** | **str** | Output only. Create time stamp | [optional] [readonly] 
**description** | **str** | Optional. Description of the firewall endpoint. Max length 2048 characters. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels as key value pairs | [optional] 
**name** | **str** | Immutable. Identifier. name of resource | [optional] 
**reconciling** | **bool** | Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the endpoint. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time stamp | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_endpoint import FirewallEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallEndpoint from a JSON string
firewall_endpoint_instance = FirewallEndpoint.from_json(json)
# print the JSON string representation of the object
print(FirewallEndpoint.to_json())

# convert the object into a dict
firewall_endpoint_dict = firewall_endpoint_instance.to_dict()
# create an instance of FirewallEndpoint from a dict
firewall_endpoint_from_dict = FirewallEndpoint.from_dict(firewall_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


