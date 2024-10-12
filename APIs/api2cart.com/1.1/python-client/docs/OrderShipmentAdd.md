# OrderShipmentAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjust_stock** | **bool** | This parameter is used for adjust stock. | [optional] [default to False]
**enable_cache** | **bool** | If the value is &#39;true&#39; and order exist in our cache, we will use order.info from cache to prepare shipment items. | [optional] [default to False]
**is_shipped** | **bool** | Defines shipment&#39;s status | [optional] [default to True]
**items** | [**List[OrderShipmentAddItemsInner]**](OrderShipmentAddItemsInner.md) | Defines items in the order that will be shipped | [optional] 
**order_id** | **str** | Defines the order for which the shipment will be created | [optional] 
**send_notifications** | **bool** | Send notifications to customer after shipment was created | [optional] [default to False]
**shipment_provider** | **str** | Defines company name that provide tracking of shipment | [optional] 
**shipping_method** | **str** | Define shipping method | [optional] 
**store_id** | **str** | Store Id | [optional] 
**tracking_link** | **str** | Defines custom tracking link | [optional] 
**tracking_numbers** | [**List[OrderShipmentAddTrackingNumbersInner]**](OrderShipmentAddTrackingNumbersInner.md) | Defines shipment&#39;s tracking numbers that have to be added&lt;/br&gt; How set tracking numbers to appropriate carrier:&lt;ul&gt;&lt;li&gt;tracking_numbers[]&#x3D;a2c.demo1,a2c.demo2 - set default carrier&lt;/li&gt;&lt;li&gt;tracking_numbers[&lt;b&gt;carrier_id&lt;/b&gt;]&#x3D;a2c.demo - set appropriate carrier&lt;/li&gt;&lt;/ul&gt;To get the list of carriers IDs that are available in your store, use the &lt;a href &#x3D; \&quot;https://api2cart.com/docs/#/cart/CartInfo\&quot;&gt;cart.info&lt;/a &gt; method | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 

## Example

```python
from openapi_client.models.order_shipment_add import OrderShipmentAdd

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentAdd from a JSON string
order_shipment_add_instance = OrderShipmentAdd.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentAdd.to_json())

# convert the object into a dict
order_shipment_add_dict = order_shipment_add_instance.to_dict()
# create an instance of OrderShipmentAdd from a dict
order_shipment_add_from_dict = OrderShipmentAdd.from_dict(order_shipment_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


