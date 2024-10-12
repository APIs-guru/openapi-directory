# ConnectionPartial

Connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**lacp_timeout** | **str** | This sets the LACP Timeout mode. Both ends of the connections need to be configured the same.  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**mode** | **str** | Sets the mode of the connection. The mode can be:  - &#x60;lag_lacp&#x60;: connection is build as a LAG with LACP enabled - &#x60;lag_static&#x60;: connection is build as LAG with static configuration - &#x60;flex_ethernet&#x60;: connect is build as a FlexEthernet channel - &#x60;standalone&#x60;: only one port is allowed in this connection without any bundling.  | [optional] 
**name** | **str** |  | [optional] 
**outer_vlan_ethertypes** | **List[str]** | The ethertype of the outer tag in hexadecimal notation.  | [optional] 
**ports** | **List[str]** | References to the port belonging to this connection. Typically all ports within one connection are distributed over the same device.  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**speed** | **int** | Shows the total bandwidth of the connection in Mbit/s.  | [optional] 
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**vlan_types** | **List[str]** | A list of vlan config types you can configure using this connection. | [optional] 

## Example

```python
from openapi_client.models.connection_partial import ConnectionPartial

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionPartial from a JSON string
connection_partial_instance = ConnectionPartial.from_json(json)
# print the JSON string representation of the object
print(ConnectionPartial.to_json())

# convert the object into a dict
connection_partial_dict = connection_partial_instance.to_dict()
# create an instance of ConnectionPartial from a dict
connection_partial_from_dict = ConnectionPartial.from_dict(connection_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


