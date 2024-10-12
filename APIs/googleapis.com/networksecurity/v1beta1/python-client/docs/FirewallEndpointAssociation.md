# FirewallEndpointAssociation

Message describing Association object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Create time stamp | [optional] [readonly] 
**firewall_endpoint** | **str** | Required. The URL of the FirewallEndpoint that is being associated. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels as key value pairs | [optional] 
**name** | **str** | Immutable. Identifier. name of resource | [optional] 
**network** | **str** | Required. The URL of the network that is being associated. | [optional] 
**reconciling** | **bool** | Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the association. | [optional] [readonly] 
**tls_inspection_policy** | **str** | Optional. The URL of the TlsInspectionPolicy that is being associated. | [optional] 
**update_time** | **str** | Output only. Update time stamp | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_endpoint_association import FirewallEndpointAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallEndpointAssociation from a JSON string
firewall_endpoint_association_instance = FirewallEndpointAssociation.from_json(json)
# print the JSON string representation of the object
print(FirewallEndpointAssociation.to_json())

# convert the object into a dict
firewall_endpoint_association_dict = firewall_endpoint_association_instance.to_dict()
# create an instance of FirewallEndpointAssociation from a dict
firewall_endpoint_association_from_dict = FirewallEndpointAssociation.from_dict(firewall_endpoint_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


