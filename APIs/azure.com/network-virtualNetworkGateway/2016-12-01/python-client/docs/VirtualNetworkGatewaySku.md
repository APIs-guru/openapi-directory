# VirtualNetworkGatewaySku

VirtualNetworkGatewaySku details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The capacity. | [optional] 
**name** | **str** | Gateway SKU name. Possible values are: &#39;Basic&#39;, &#39;HighPerformance&#39;,&#39;Standard&#39;, and &#39;UltraPerformance&#39;. | [optional] 
**tier** | **str** | Gateway SKU tier. Possible values are: &#39;Basic&#39;, &#39;HighPerformance&#39;,&#39;Standard&#39;, and &#39;UltraPerformance&#39;. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_sku import VirtualNetworkGatewaySku

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewaySku from a JSON string
virtual_network_gateway_sku_instance = VirtualNetworkGatewaySku.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewaySku.to_json())

# convert the object into a dict
virtual_network_gateway_sku_dict = virtual_network_gateway_sku_instance.to_dict()
# create an instance of VirtualNetworkGatewaySku from a dict
virtual_network_gateway_sku_from_dict = VirtualNetworkGatewaySku.from_dict(virtual_network_gateway_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


