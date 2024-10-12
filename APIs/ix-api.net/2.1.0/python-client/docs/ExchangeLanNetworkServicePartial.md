# ExchangeLanNetworkServicePartial

Exchange Lan Network Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**ixfdb_ixid** | **int** | id of ixfdb | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**metro_area_network** | **str** | Id of the &#x60;MetroAreaNetwork&#x60; where the exchange lan network service is directly provided.  Same as &#x60;service_metro_area_network&#x60; on the related &#x60;ProductOffering&#x60;.  | [optional] 
**name** | **str** | Exchange-dependent service name, will be shown on the invoice. | [optional] 
**network_features** | **List[str]** |  | [optional] 
**nsc_required_contact_roles** | **List[str]** | The configuration will require at least one of each of the specified roles assigned to contacts.  The &#x60;RoleAssignment&#x60; is associated through the &#x60;role_assignments&#x60; list property of the network service configuration. | [optional] [readonly] 
**peeringdb_ixid** | **int** | PeeringDB ixid | [optional] 
**product_offering** | **str** | *deprecation notice* | [optional] 
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**subnet_v4** | **str** | IPv4 subnet in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation) CIDR notation.  | [optional] 
**subnet_v6** | **str** | IPv6 subnet in hexadecimal colon separated CIDR notation.  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.exchange_lan_network_service_partial import ExchangeLanNetworkServicePartial

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeLanNetworkServicePartial from a JSON string
exchange_lan_network_service_partial_instance = ExchangeLanNetworkServicePartial.from_json(json)
# print the JSON string representation of the object
print(ExchangeLanNetworkServicePartial.to_json())

# convert the object into a dict
exchange_lan_network_service_partial_dict = exchange_lan_network_service_partial_instance.to_dict()
# create an instance of ExchangeLanNetworkServicePartial from a dict
exchange_lan_network_service_partial_from_dict = ExchangeLanNetworkServicePartial.from_dict(exchange_lan_network_service_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


