# NetworkServiceRequestPartial

Polymorphic Network Service Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**joining_member_account** | **str** | The account of the B-side member joining the virtual circuit.  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**product_offering** | **str** |  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**type** | **str** |  | 
**name** | **str** | Name of the multi-point to multi-point virtual circuit. | [optional] 
**public** | **bool** | A public mp2mp network service can be joined by everyone on the exchange unless denied by a member-joining-rule.  Public network services are visible to other members of the IXP, however only &#x60;name&#x60;, &#x60;type&#x60;, &#x60;product_offering&#x60;, &#x60;consuming_account&#x60; and &#x60;managing_account&#x60; are made available.  Other required fields are redacted. | [optional] [default to False]
**capacity** | **int** | The capacity of the service in Mbps. When null, the maximum capacity will be used. | [optional] 
**cloud_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.network_service_request_partial import NetworkServiceRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkServiceRequestPartial from a JSON string
network_service_request_partial_instance = NetworkServiceRequestPartial.from_json(json)
# print the JSON string representation of the object
print(NetworkServiceRequestPartial.to_json())

# convert the object into a dict
network_service_request_partial_dict = network_service_request_partial_instance.to_dict()
# create an instance of NetworkServiceRequestPartial from a dict
network_service_request_partial_from_dict = NetworkServiceRequestPartial.from_dict(network_service_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


