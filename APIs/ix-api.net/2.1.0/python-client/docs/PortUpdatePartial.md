# PortUpdatePartial

Port Update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**connection** | **str** |  | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**speed** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.port_update_partial import PortUpdatePartial

# TODO update the JSON string below
json = "{}"
# create an instance of PortUpdatePartial from a JSON string
port_update_partial_instance = PortUpdatePartial.from_json(json)
# print the JSON string representation of the object
print(PortUpdatePartial.to_json())

# convert the object into a dict
port_update_partial_dict = port_update_partial_instance.to_dict()
# create an instance of PortUpdatePartial from a dict
port_update_partial_from_dict = PortUpdatePartial.from_dict(port_update_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


