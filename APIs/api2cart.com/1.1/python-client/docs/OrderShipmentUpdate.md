# OrderShipmentUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_shipped** | **bool** | Defines shipment&#39;s status | [optional] [default to True]
**order_id** | **str** | Defines the order that will be updated | [optional] 
**replace** | **bool** | Allows rewrite tracking numbers | [optional] [default to True]
**shipment_id** | **str** | Shipment id indicates the number of delivery | 
**store_id** | **str** | Store Id | [optional] 
**tracking_link** | **str** | Defines custom tracking link | [optional] 
**tracking_numbers** | [**List[OrderShipmentAddTrackingNumbersInner]**](OrderShipmentAddTrackingNumbersInner.md) | Defines shipment&#39;s tracking numbers that have to be added&lt;/br&gt; How set tracking numbers to appropriate carrier:&lt;ul&gt;&lt;li&gt;tracking_numbers[]&#x3D;a2c.demo1,a2c.demo2 - set default carrier&lt;/li&gt;&lt;li&gt;tracking_numbers[&lt;b&gt;carrier_id&lt;/b&gt;]&#x3D;a2c.demo - set appropriate carrier&lt;/li&gt;&lt;/ul&gt;To get the list of carriers IDs that are available in your store, use the &lt;a href &#x3D; \&quot;https://api2cart.com/docs/#/cart/CartInfo\&quot;&gt;cart.info&lt;/a &gt; method | [optional] 

## Example

```python
from openapi_client.models.order_shipment_update import OrderShipmentUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentUpdate from a JSON string
order_shipment_update_instance = OrderShipmentUpdate.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentUpdate.to_json())

# convert the object into a dict
order_shipment_update_dict = order_shipment_update_instance.to_dict()
# create an instance of OrderShipmentUpdate from a dict
order_shipment_update_from_dict = OrderShipmentUpdate.from_dict(order_shipment_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


