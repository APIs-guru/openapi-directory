# CloudNetworkProductOfferingPartial

Cloud Network Product Offering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_max** | **int** | When not &#x60;null&#x60;, this value enforces a mandatory rate limit for all network service configs. | [optional] 
**bandwidth_min** | **int** | When configuring access to the network service, at least this &#x60;capacity&#x60; must be provided. | [optional] 
**delivery_method** | **str** | The exchange delivers the service over a &#x60;shared&#x60; or &#x60;dedicated&#x60; NNI. | [optional] 
**display_name** | **str** |  | [optional] 
**diversity** | **int** | The service can be delivered over multiple handovers from the exchange to the &#x60;service_provider&#x60;. The &#x60;diversity&#x60; denotes the number of handovers between the exchange and the service provider. A value of two signals a redundant service.  Only one network service configuration for each &#x60;handover&#x60; and &#x60;cloud_vlan&#x60; can be created. | [optional] 
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
**service_provider_pop** | **str** | The datacenter description of the partner NNI to the service provider.  | [optional] 
**service_provider_region** | **str** | The service provider offers the network service for a specific region.  | [optional] 
**service_provider_workflow** | **str** | When the workflow is &#x60;provider_first&#x60; the subscriber creates a circuit with the cloud provider and provides a &#x60;cloud_key&#x60; for filtering the product-offerings.  If the workflow is &#x60;exchange_first&#x60; the IX will create the cloud circuit on the provider side.  | [optional] 
**type** | **str** |  | 
**upgrade_allowed** | **bool** | Indicates if the service can be migrated to a higher bandwidth. | [optional] 

## Example

```python
from openapi_client.models.cloud_network_product_offering_partial import CloudNetworkProductOfferingPartial

# TODO update the JSON string below
json = "{}"
# create an instance of CloudNetworkProductOfferingPartial from a JSON string
cloud_network_product_offering_partial_instance = CloudNetworkProductOfferingPartial.from_json(json)
# print the JSON string representation of the object
print(CloudNetworkProductOfferingPartial.to_json())

# convert the object into a dict
cloud_network_product_offering_partial_dict = cloud_network_product_offering_partial_instance.to_dict()
# create an instance of CloudNetworkProductOfferingPartial from a dict
cloud_network_product_offering_partial_from_dict = CloudNetworkProductOfferingPartial.from_dict(cloud_network_product_offering_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


