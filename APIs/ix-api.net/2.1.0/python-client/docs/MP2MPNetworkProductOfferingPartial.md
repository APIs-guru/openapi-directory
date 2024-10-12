# MP2MPNetworkProductOfferingPartial

MP2MP Network Product Offering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_max** | **int** | When not &#x60;null&#x60;, this value enforces a mandatory rate limit for all network service configs. | [optional] 
**bandwidth_min** | **int** | When configuring access to the network service, at least this &#x60;capacity&#x60; must be provided. | [optional] 
**display_name** | **str** |  | [optional] 
**downgrade_allowed** | **bool** | Indicates if the service can be migrated to a lower bandwidth. | [optional] 
**handover_metro_area** | **str** | Id of the &#x60;MetroArea&#x60;. The network service will be accessed from this metro area.  | [optional] 
**handover_metro_area_network** | **str** | Id of the &#x60;MetroAreaNetwork&#x60;. The service will be accessed through the handover metro area network.  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | Name of the product | [optional] 
**physical_port_speed** | **int** | If the service is dependent on the speed of the physical port this field denotes the speed. | [optional] 
**provider_vlans** | **str** | The &#x60;NetworkService&#x60; provides &#x60;single&#x60; or &#x60;multi&#x60;ple vlans. | [optional] 
**resource_type** | **str** | The resource type refers to an ix-api resource.  | [optional] 
**service_metro_area** | **str** | Id of the &#x60;MetroArea&#x60;. The service is delivered in this metro area.  | [optional] 
**service_metro_area_network** | **str** | Id of the &#x60;MetroAreaNetwork&#x60;. The service is directly provided on the metro area network.  | [optional] 
**service_provider** | **str** | The name of the provider providing the service.  | [optional] 
**type** | **str** |  | 
**upgrade_allowed** | **bool** | Indicates if the service can be migrated to a higher bandwidth. | [optional] 

## Example

```python
from openapi_client.models.mp2_mp_network_product_offering_partial import MP2MPNetworkProductOfferingPartial

# TODO update the JSON string below
json = "{}"
# create an instance of MP2MPNetworkProductOfferingPartial from a JSON string
mp2_mp_network_product_offering_partial_instance = MP2MPNetworkProductOfferingPartial.from_json(json)
# print the JSON string representation of the object
print(MP2MPNetworkProductOfferingPartial.to_json())

# convert the object into a dict
mp2_mp_network_product_offering_partial_dict = mp2_mp_network_product_offering_partial_instance.to_dict()
# create an instance of MP2MPNetworkProductOfferingPartial from a dict
mp2_mp_network_product_offering_partial_from_dict = MP2MPNetworkProductOfferingPartial.from_dict(mp2_mp_network_product_offering_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


