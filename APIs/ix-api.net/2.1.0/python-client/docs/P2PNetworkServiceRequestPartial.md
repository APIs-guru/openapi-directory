# P2PNetworkServiceRequestPartial

P2P Network Service Request

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

## Example

```python
from openapi_client.models.p2_p_network_service_request_partial import P2PNetworkServiceRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of P2PNetworkServiceRequestPartial from a JSON string
p2_p_network_service_request_partial_instance = P2PNetworkServiceRequestPartial.from_json(json)
# print the JSON string representation of the object
print(P2PNetworkServiceRequestPartial.to_json())

# convert the object into a dict
p2_p_network_service_request_partial_dict = p2_p_network_service_request_partial_instance.to_dict()
# create an instance of P2PNetworkServiceRequestPartial from a dict
p2_p_network_service_request_partial_from_dict = P2PNetworkServiceRequestPartial.from_dict(p2_p_network_service_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


