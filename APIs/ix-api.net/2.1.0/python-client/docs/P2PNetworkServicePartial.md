# P2PNetworkServicePartial

P2P Network Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**capacity** | **int** | The capacity of the service in Mbps. When null, the maximum capacity will be used. | [optional] 
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**joining_member_account** | **str** | The account of the B-side member joining the virtual circuit.  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**nsc_required_contact_roles** | **List[str]** | The configuration will require at least one of each of the specified roles assigned to contacts.  The &#x60;RoleAssignment&#x60; is associated through the &#x60;role_assignments&#x60; list property of the network service configuration. | [optional] [readonly] 
**product_offering** | **str** |  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.p2_p_network_service_partial import P2PNetworkServicePartial

# TODO update the JSON string below
json = "{}"
# create an instance of P2PNetworkServicePartial from a JSON string
p2_p_network_service_partial_instance = P2PNetworkServicePartial.from_json(json)
# print the JSON string representation of the object
print(P2PNetworkServicePartial.to_json())

# convert the object into a dict
p2_p_network_service_partial_dict = p2_p_network_service_partial_instance.to_dict()
# create an instance of P2PNetworkServicePartial from a dict
p2_p_network_service_partial_from_dict = P2PNetworkServicePartial.from_dict(p2_p_network_service_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


