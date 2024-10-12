# BillbeeInterfacesBillbeeAPIModelOrder

A class that represents the Billbee data model of a single order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_loss_of_return_right** | **bool** | Customer accepts loss due to withdrawal | [optional] 
**adjustment_cost** | **float** |  | [optional] 
**adjustment_reason** | **str** |  | [optional] 
**api_account_id** | **int** | Id of the account, this order belongs to | [optional] 
**api_account_name** | **str** | The name of the account, this order belongs to. Will be ignored on order creation. | [optional] 
**archived_at** | **datetime** | If set, the order was already archived at the given date. Further modification is disabled. | [optional] 
**bill_bee_order_id** | **int** | The Order.Id from the Billbee database | [optional] 
**bill_bee_parent_order_id** | **int** | The Id of the parent order in the Billbee database | [optional] 
**buyer** | [**BillbeeInterfacesBillbeeAPIModelOrderUser**](BillbeeInterfacesBillbeeAPIModelOrderUser.md) |  | [optional] 
**comments** | [**List[BillbeeInterfacesBillbeeAPIModelCommentApiModel]**](BillbeeInterfacesBillbeeAPIModelCommentApiModel.md) | All messages / comments of the order | [optional] 
**confirmed_at** | **datetime** | The date on which the order was confirmed | [optional] 
**created_at** | **datetime** | The date on which the order was created | [optional] 
**currency** | **str** | The three letter currency code. | [optional] 
**custom_invoice_note** | **str** | An optional multiline text which is printed on the invoice | [optional] 
**customer** | [**BillbeeInterfacesBillbeeAPIModelCustomerApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerApiModel.md) |  | [optional] 
**customer_number** | **str** | The customer number (not to be confused with the id of the customer) | [optional] 
**customer_vat_id** | **str** | The vat-id, that was given by the customer to fulfill this order | [optional] 
**delivery_source_country_code** | **str** | An optional Country ISO2 Code of the country where order is shipped from (FBA) | [optional] 
**distribution_center** | **str** | An optional code for the distribution center delivering this order | [optional] 
**history** | [**List[BillbeeInterfacesOrderHistoryEntry]**](BillbeeInterfacesOrderHistoryEntry.md) |  | [optional] 
**id** | **str** | Id of the order in the external system (marketplace) | [optional] 
**invoice_address** | [**BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel**](BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel.md) |  | [optional] 
**invoice_date** | **datetime** | The date on which the invoice was created | [optional] 
**invoice_number** | **int** | The invoice number | [optional] 
**invoice_number_postfix** | **str** | The postfix of the invoice number | [optional] 
**invoice_number_prefix** | **str** | The prefix of the invoice number | [optional] 
**is_cancelation_for** | **str** | An optional Order Id (externalid) for an order if this is a cancel order (shopify only at the moment) | [optional] 
**is_from_billbee_api** | **bool** | Indicates whether the order was created through the Billbee-Api or not. | [optional] 
**language_code** | **str** | The two-letter language code of the customer | [optional] 
**last_modified_at** | **datetime** | Date of the last update, the order got | [optional] 
**merchant_vat_id** | **str** | The vat-id, that should be displayed on the invoice and other order documents | [optional] 
**order_items** | [**List[BillbeeInterfacesBillbeeAPIModelOrderItem]**](BillbeeInterfacesBillbeeAPIModelOrderItem.md) | The list of items purchased like shirt, pant, toys etc | [optional] 
**order_number** | **str** | Order number of the order in the external system (marketplace) | [optional] 
**paid_amount** | **float** |  | [optional] 
**payed_at** | **datetime** | The date on which the order was paid | [optional] 
**payment_instruction** | **str** | A textfield optionaly filled with a payment instruction text for printout on the invoice (z.B. Ebay Kauf auf Rechnung) | [optional] 
**payment_method** | **int** | The payment method | [optional] 
**payment_reference** | **str** | A payment reference. Should not be used any more. Please use &#39;Payments&#39; instead. | [optional] 
**payment_transaction_id** | **str** | The id of the payment transaction. For example the transaction id of PayPal payment. Should not be used any more. Please use &#39;Payments&#39; instead. | [optional] 
**payments** | [**List[BillbeeInterfacesBillbeeAPIModelsOrderPayment]**](BillbeeInterfacesBillbeeAPIModelsOrderPayment.md) |  | [optional] 
**rebate_difference** | **float** |  | [optional] [readonly] 
**restored_at** | **datetime** | If set, the order was restored from the archive at the given date. | [optional] 
**seller** | [**BillbeeInterfacesBillbeeAPIModelOrderUser**](BillbeeInterfacesBillbeeAPIModelOrderUser.md) |  | [optional] 
**seller_comment** | **str** | An internal seller comment | [optional] 
**ship_weight_kg** | **float** | The total weight of the shipment(s) | [optional] 
**shipped_at** | **datetime** | The date on which the order was shipped | [optional] 
**shipping_address** | [**BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel**](BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel.md) |  | [optional] 
**shipping_cost** | **float** | The shipping cost | [optional] 
**shipping_ids** | [**List[BillbeeInterfacesBillbeeAPIModelShipment]**](BillbeeInterfacesBillbeeAPIModelShipment.md) | The shipments of the order | [optional] 
**shipping_profile_id** | **str** | Internal Id for the shipping profile for that order | [optional] 
**shipping_profile_name** | **str** | Display Name of Shipping profile, if available | [optional] 
**shipping_provider_id** | **int** | Internal Id for the used shipping provider | [optional] 
**shipping_provider_name** | **str** | The Name for of used shipping provider | [optional] 
**shipping_provider_product_id** | **int** | Internal Id for the used shipping product | [optional] 
**shipping_provider_product_name** | **str** | The Name of the used shipping product | [optional] 
**shipping_services** | [**List[BillbeeInterfacesShippingProductService]**](BillbeeInterfacesShippingProductService.md) | Additional services for the shipment | [optional] 
**state** | **int** | The current state of the order | [optional] 
**tags** | **List[str]** | The Tags of the order | [optional] 
**tax_rate1** | **float** | The regular tax rate | [optional] 
**tax_rate2** | **float** | The reduced tax rate | [optional] 
**total_cost** | **float** | The total cost excluding shipping cost | [optional] 
**updated_at** | **datetime** | The date on which the order was last updated | [optional] 
**vat_id** | **str** | The customers vat id | [optional] 
**vat_mode** | **int** | The vat mode of the order | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_order import BillbeeInterfacesBillbeeAPIModelOrder

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelOrder from a JSON string
billbee_interfaces_billbee_api_model_order_instance = BillbeeInterfacesBillbeeAPIModelOrder.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelOrder.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_order_dict = billbee_interfaces_billbee_api_model_order_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelOrder from a dict
billbee_interfaces_billbee_api_model_order_from_dict = BillbeeInterfacesBillbeeAPIModelOrder.from_dict(billbee_interfaces_billbee_api_model_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


