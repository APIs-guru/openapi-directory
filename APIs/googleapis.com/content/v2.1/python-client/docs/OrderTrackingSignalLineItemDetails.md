# OrderTrackingSignalLineItemDetails

The line items of the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Brand of the product. | [optional] 
**gtin** | **str** | The Global Trade Item Number. | [optional] 
**line_item_id** | **str** | Required. The ID for this line item. | [optional] 
**mpn** | **str** | The manufacturer part number. | [optional] 
**product_description** | **str** | Plain text description of this product (deprecated: Please use product_title instead). | [optional] 
**product_id** | **str** | Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId. | [optional] 
**product_title** | **str** | Plain text title of this product. | [optional] 
**quantity** | **str** | The quantity of the line item in the order. | [optional] 
**sku** | **str** | Merchant SKU for this item (deprecated). | [optional] 
**upc** | **str** | Universal product code for this item (deprecated: Please use GTIN instead). | [optional] 

## Example

```python
from openapi_client.models.order_tracking_signal_line_item_details import OrderTrackingSignalLineItemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTrackingSignalLineItemDetails from a JSON string
order_tracking_signal_line_item_details_instance = OrderTrackingSignalLineItemDetails.from_json(json)
# print the JSON string representation of the object
print(OrderTrackingSignalLineItemDetails.to_json())

# convert the object into a dict
order_tracking_signal_line_item_details_dict = order_tracking_signal_line_item_details_instance.to_dict()
# create an instance of OrderTrackingSignalLineItemDetails from a dict
order_tracking_signal_line_item_details_from_dict = OrderTrackingSignalLineItemDetails.from_dict(order_tracking_signal_line_item_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


