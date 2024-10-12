# ListFirewallEndpointAssociationsResponse

Message for response to listing Associations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firewall_endpoint_associations** | [**List[FirewallEndpointAssociation]**](FirewallEndpointAssociation.md) | The list of Association | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_firewall_endpoint_associations_response import ListFirewallEndpointAssociationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFirewallEndpointAssociationsResponse from a JSON string
list_firewall_endpoint_associations_response_instance = ListFirewallEndpointAssociationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFirewallEndpointAssociationsResponse.to_json())

# convert the object into a dict
list_firewall_endpoint_associations_response_dict = list_firewall_endpoint_associations_response_instance.to_dict()
# create an instance of ListFirewallEndpointAssociationsResponse from a dict
list_firewall_endpoint_associations_response_from_dict = ListFirewallEndpointAssociationsResponse.from_dict(list_firewall_endpoint_associations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


