# ExchangeLanNetworkProductOffering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_max** | **int** | When not &#x60;null&#x60;, this value enforces a mandatory rate limit for all network service configs. | 
**bandwidth_min** | **int** | When configuring access to the network service, at least this &#x60;capacity&#x60; must be provided. | 
**display_name** | **str** |  | 
**downgrade_allowed** | **bool** | Indicates if the service can be migrated to a lower bandwidth. | 
**exchange_lan_network_service** | **str** | The id of the exchange lan network service. | 
**handover_metro_area** | **str** | Id of the &#x60;MetroArea&#x60;. The network service will be accessed from this metro area.  | 
**handover_metro_area_network** | **str** | Id of the &#x60;MetroAreaNetwork&#x60;. The service will be accessed through the handover metro area network.  | 
**id** | **str** |  | 
**name** | **str** | Name of the product | 
**physical_port_speed** | **int** | If the service is dependent on the speed of the physical port this field denotes the speed. | 
**provider_vlans** | **str** | The &#x60;NetworkService&#x60; provides &#x60;single&#x60; or &#x60;multi&#x60;ple vlans. | 
**resource_type** | **str** | The resource type refers to an ix-api resource.  | 
**service_metro_area** | **str** | Id of the &#x60;MetroArea&#x60;. The service is delivered in this metro area.  | 
**service_metro_area_network** | **str** | Id of the &#x60;MetroAreaNetwork&#x60;. The service is directly provided on the metro area network.  | 
**service_provider** | **str** | The name of the provider providing the service.  | 
**type** | **str** |  | 
**upgrade_allowed** | **bool** | Indicates if the service can be migrated to a higher bandwidth. | 

## Example

```python
from openapi_client.models.exchange_lan_network_product_offering import ExchangeLanNetworkProductOffering

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeLanNetworkProductOffering from a JSON string
exchange_lan_network_product_offering_instance = ExchangeLanNetworkProductOffering.from_json(json)
# print the JSON string representation of the object
print(ExchangeLanNetworkProductOffering.to_json())

# convert the object into a dict
exchange_lan_network_product_offering_dict = exchange_lan_network_product_offering_instance.to_dict()
# create an instance of ExchangeLanNetworkProductOffering from a dict
exchange_lan_network_product_offering_from_dict = ExchangeLanNetworkProductOffering.from_dict(exchange_lan_network_product_offering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


