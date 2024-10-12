# P2MPNetworkService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | 
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**member_joining_rules** | **List[str]** |  | 
**name** | **str** | Name of the point to multi-point virtual circuit. | 
**network_features** | **List[str]** |  | 
**nsc_required_contact_roles** | **List[str]** | The configuration will require at least one of each of the specified roles assigned to contacts.  The &#x60;RoleAssignment&#x60; is associated through the &#x60;role_assignments&#x60; list property of the network service configuration. | [optional] [readonly] 
**product_offering** | **str** |  | 
**public** | **bool** | A public p2mp network service can be joined by everyone on the exchange unless denied by a member-joining-rule.  Public network services are visible to other members of the IXP, however only &#x60;name&#x60;, &#x60;type&#x60;, &#x60;product_offering&#x60;, &#x60;consuming_account&#x60; and &#x60;managing_account&#x60; are made available.  Other required fields are redacted. | [optional] [default to False]
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**state** | **str** |  | 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.p2_mp_network_service import P2MPNetworkService

# TODO update the JSON string below
json = "{}"
# create an instance of P2MPNetworkService from a JSON string
p2_mp_network_service_instance = P2MPNetworkService.from_json(json)
# print the JSON string representation of the object
print(P2MPNetworkService.to_json())

# convert the object into a dict
p2_mp_network_service_dict = p2_mp_network_service_instance.to_dict()
# create an instance of P2MPNetworkService from a dict
p2_mp_network_service_from_dict = P2MPNetworkService.from_dict(p2_mp_network_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


