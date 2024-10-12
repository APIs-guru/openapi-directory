# FirewallEndpointAssociationReference

This is a subset of the FirewallEndpointAssociation message, containing fields to be used by the consumer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the FirewallEndpointAssociation. Format: projects/{project}/locations/{location}/firewallEndpointAssociations/{id} | [optional] [readonly] 
**network** | **str** | Output only. The VPC network associated. Format: projects/{project}/global/networks/{name}. | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_endpoint_association_reference import FirewallEndpointAssociationReference

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallEndpointAssociationReference from a JSON string
firewall_endpoint_association_reference_instance = FirewallEndpointAssociationReference.from_json(json)
# print the JSON string representation of the object
print(FirewallEndpointAssociationReference.to_json())

# convert the object into a dict
firewall_endpoint_association_reference_dict = firewall_endpoint_association_reference_instance.to_dict()
# create an instance of FirewallEndpointAssociationReference from a dict
firewall_endpoint_association_reference_from_dict = FirewallEndpointAssociationReference.from_dict(firewall_endpoint_association_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


