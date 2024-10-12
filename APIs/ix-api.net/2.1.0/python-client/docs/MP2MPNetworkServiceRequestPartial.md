# MP2MPNetworkServiceRequestPartial

MP2MP Network Service Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**name** | **str** | Name of the multi-point to multi-point virtual circuit. | [optional] 
**product_offering** | **str** |  | [optional] 
**public** | **bool** | A public mp2mp network service can be joined by everyone on the exchange unless denied by a member-joining-rule.  Public network services are visible to other members of the IXP, however only &#x60;name&#x60;, &#x60;type&#x60;, &#x60;product_offering&#x60;, &#x60;consuming_account&#x60; and &#x60;managing_account&#x60; are made available.  Other required fields are redacted. | [optional] [default to False]
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**type** | **str** |  | 

## Example

```python
from openapi_client.models.mp2_mp_network_service_request_partial import MP2MPNetworkServiceRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of MP2MPNetworkServiceRequestPartial from a JSON string
mp2_mp_network_service_request_partial_instance = MP2MPNetworkServiceRequestPartial.from_json(json)
# print the JSON string representation of the object
print(MP2MPNetworkServiceRequestPartial.to_json())

# convert the object into a dict
mp2_mp_network_service_request_partial_dict = mp2_mp_network_service_request_partial_instance.to_dict()
# create an instance of MP2MPNetworkServiceRequestPartial from a dict
mp2_mp_network_service_request_partial_from_dict = MP2MPNetworkServiceRequestPartial.from_dict(mp2_mp_network_service_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


