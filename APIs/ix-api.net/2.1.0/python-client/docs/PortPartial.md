# PortPartial

Port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**connection** | **str** |  | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**device** | **str** | The device the port.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**media_type** | **str** | The media type of the port. Query the device&#39;s capabilities for available types.  | [optional] 
**name** | **str** | Name of the port (set by the exchange) | [optional] [readonly] [default to '']
**pop** | **str** | Same as the &#x60;pop&#x60; of the &#x60;device&#x60;.  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**speed** | **int** |  | [optional] [readonly] 
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.port_partial import PortPartial

# TODO update the JSON string below
json = "{}"
# create an instance of PortPartial from a JSON string
port_partial_instance = PortPartial.from_json(json)
# print the JSON string representation of the object
print(PortPartial.to_json())

# convert the object into a dict
port_partial_dict = port_partial_instance.to_dict()
# create an instance of PortPartial from a dict
port_partial_from_dict = PortPartial.from_dict(port_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


