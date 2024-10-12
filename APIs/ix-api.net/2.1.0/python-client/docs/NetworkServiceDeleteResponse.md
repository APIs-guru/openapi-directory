# NetworkServiceDeleteResponse

Polymorphic Network Service Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | 
**capacity** | **int** | The capacity of the service in Mbps. When null, the maximum capacity will be used. | [optional] 
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | 
**joining_member_account** | **str** | The account of the B-side member joining the virtual circuit.  | 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**nsc_required_contact_roles** | **List[str]** | The configuration will require at least one of each of the specified roles assigned to contacts.  The &#x60;RoleAssignment&#x60; is associated through the &#x60;role_assignments&#x60; list property of the network service configuration. | [optional] [readonly] 
**product_offering** | **str** |  | 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**state** | **str** |  | 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**type** | **str** |  | 
**member_joining_rules** | **List[str]** |  | 
**name** | **str** | Name of the multi-point to multi-point virtual circuit. | 
**network_features** | **List[str]** |  | 
**public** | **bool** | A public mp2mp network service can be joined by everyone on the exchange unless denied by a member-joining-rule.  Public network services are visible to other members of the IXP, however only &#x60;name&#x60;, &#x60;type&#x60;, &#x60;product_offering&#x60;, &#x60;consuming_account&#x60; and &#x60;managing_account&#x60; are made available.  Other required fields are redacted. | [optional] [default to False]
**cloud_key** | **str** |  | 
**diversity** | **int** | Same value as the corresponding &#x60;ProductOffering&#x60;.  The service can be delivered over multiple handovers from the exchange to the &#x60;service_provider&#x60;.  The &#x60;diversity&#x60; denotes the number of handovers between the exchange and the service provider. A value of two signals a redundant service.  Only one network service configuration for each &#x60;handover&#x60; and &#x60;cloud_vlan&#x60; can be created. | 
**provider_ref** | **str** | For a cloud network service with the exchange first workflow, the &#x60;provider_ref&#x60; will be a reference to a resource of the cloud provider. (E.g. the UUID of a virtual circuit.)  The &#x60;provider_ref&#x60; is managed by the exchange and its meaning may vary between different cloud services.  | 

## Example

```python
from openapi_client.models.network_service_delete_response import NetworkServiceDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkServiceDeleteResponse from a JSON string
network_service_delete_response_instance = NetworkServiceDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(NetworkServiceDeleteResponse.to_json())

# convert the object into a dict
network_service_delete_response_dict = network_service_delete_response_instance.to_dict()
# create an instance of NetworkServiceDeleteResponse from a dict
network_service_delete_response_from_dict = NetworkServiceDeleteResponse.from_dict(network_service_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


