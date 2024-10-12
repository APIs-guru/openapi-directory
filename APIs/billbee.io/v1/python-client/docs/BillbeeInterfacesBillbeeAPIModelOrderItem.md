# BillbeeInterfacesBillbeeAPIModelOrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[BillbeeInterfacesBillbeeAPIModelOrderItemAttribute]**](BillbeeInterfacesBillbeeAPIModelOrderItemAttribute.md) | A list of product attributes for this position | [optional] 
**billbee_id** | **int** | The billbee id of this item | [optional] 
**discount** | **float** | Sets the discount in percent | [optional] 
**dont_adjust_stock** | **bool** | If true, the import of this order won&#39;t adjust the stock level at billbee. | [optional] 
**get_price_from_article_if_any** | **bool** | If true, the price will be overwritten by the known article price in billbee if available | [optional] 
**invoice_sku** | **str** | Contains the SKU from OrderDetail (if available) or from Product | [optional] 
**is_coupon** | **bool** | Determines if it is a coupon, which is interpreted as tax-free payment | [optional] 
**product** | [**BillbeeInterfacesBillbeeAPIModelSoldProduct**](BillbeeInterfacesBillbeeAPIModelSoldProduct.md) |  | [optional] 
**quantity** | **float** | The sold quantity | [optional] 
**serial_number** | **str** | Contains the used serial number | [optional] 
**shipping_profile_id** | **str** | Determines if it is a coupon, which is interpreted as tax-free payment | [optional] 
**tax_amount** | **float** | The tax amount in the total price | [optional] 
**tax_index** | **int** | The tax index. | [optional] 
**total_price** | **float** | The total price (unit price * quantity) | [optional] 
**transaction_id** | **str** | Id of the individual transaction. Only required by Ebay to detect aggregated orders | [optional] 
**unrebated_total_price** | **float** | Is just used for the billbee api | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_order_item import BillbeeInterfacesBillbeeAPIModelOrderItem

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderItem from a JSON string
billbee_interfaces_billbee_api_model_order_item_instance = BillbeeInterfacesBillbeeAPIModelOrderItem.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelOrderItem.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_order_item_dict = billbee_interfaces_billbee_api_model_order_item_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderItem from a dict
billbee_interfaces_billbee_api_model_order_item_from_dict = BillbeeInterfacesBillbeeAPIModelOrderItem.from_dict(billbee_interfaces_billbee_api_model_order_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


