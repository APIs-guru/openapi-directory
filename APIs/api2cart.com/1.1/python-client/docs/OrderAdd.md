# OrderAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_comment** | **str** | Specifies admin&#39;s order comment | [optional] 
**admin_private_comment** | **str** | Specifies private admin&#39;s order comment | [optional] 
**bill_address_1** | **str** | Specifies first billing address | 
**bill_address_2** | **str** | Specifies second billing address | [optional] 
**bill_city** | **str** | Specifies billing city | 
**bill_company** | **str** | Specifies billing company | [optional] 
**bill_country** | **str** | Specifies billing country code | 
**bill_fax** | **str** | Specifies billing fax | [optional] 
**bill_first_name** | **str** | Specifies billing first name | 
**bill_last_name** | **str** | Specifies billing last name | 
**bill_phone** | **str** | Specifies billing phone | [optional] 
**bill_postcode** | **str** | Specifies billing postcode | 
**bill_state** | **str** | Specifies billing state code | 
**channel_id** | **str** | Channel ID | [optional] 
**clear_cache** | **bool** | Is cache clear required | [optional] [default to True]
**comment** | **str** | Specifies order comment | [optional] 
**coupon_discount** | **float** | Specifies order&#39;s coupon discount | [optional] 
**coupons** | **List[str]** | Coupons that will be applied to order | [optional] 
**create_invoice** | **bool** | Defines whether the invoice is created automatically along with the order | [optional] [default to False]
**currency** | **str** | Currency code of order | [optional] 
**customer_birthday** | **str** | Specifies customer’s birthday | [optional] 
**customer_email** | **str** | Defines the customer specified by email for whom order has to be created | 
**customer_fax** | **str** | Specifies customer’s fax | [optional] 
**customer_first_name** | **str** | Specifies customer&#39;s first name | [optional] 
**customer_last_name** | **str** | Specifies customer’s last name | [optional] 
**customer_phone** | **str** | Specifies customer’s phone | [optional] 
**var_date** | **str** | Specifies an order creation date in format Y-m-d H:i:s | [optional] 
**date_finished** | **str** | Specifies order&#39;s  finished date | [optional] 
**date_modified** | **str** | Specifies order&#39;s  modification date | [optional] 
**discount** | **float** | Specifies order&#39;s discount | [optional] 
**external_source** | **str** | Identifying the system used to generate the order | [optional] 
**financial_status** | **str** | Create order with financial status | [optional] 
**fulfillment_status** | **str** | Create order with fulfillment status | [optional] 
**gift_certificate_discount** | **float** | Discounts for order with gift certificates | [optional] 
**id** | **str** | Defines order&#39;s id | [optional] 
**inventory_behaviour** | **str** | The behaviour to use when updating inventory.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Values description:&lt;div style&#x3D;\&quot;margin-left: 2%; padding-top: 2%\&quot;&gt;&lt;div style&#x3D;\&quot;font-size:85%\&quot;&gt;&lt;b&gt;bypass&lt;/b&gt; &#x3D; Do not claim inventory &lt;/br&gt;&lt;/br&gt;&lt;b&gt;decrement_ignoring_policy&lt;/b&gt; &#x3D; Ignore the product&#39;s &lt;/br&gt; inventory policy and claim amounts&lt;/br&gt;&lt;/br&gt;&lt;b&gt;decrement_obeying_policy&lt;/b&gt; &#x3D;  Obey the product&#39;s &lt;/br&gt; inventory policy.&lt;/br&gt;&lt;/br&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; | [optional] [default to 'bypass']
**note_attributes** | [**List[OrderAddNoteAttributesInner]**](OrderAddNoteAttributesInner.md) | Defines note attributes | [optional] 
**order_id** | **str** | Defines the order id if it is supported by the cart | [optional] 
**order_item** | [**List[OrderAddOrderItemInner]**](OrderAddOrderItemInner.md) |  | 
**order_payment_method** | **str** | Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to &#39;paid&#39; | [optional] 
**order_shipping_method** | **str** | Defines order shipping method | [optional] 
**order_status** | **str** | Defines order status. | 
**prices_inc_tax** | **bool** | Indicates whether prices and subtotal includes tax. | [optional] [default to False]
**send_admin_notifications** | **bool** | Notify admin when new order was created. | [optional] [default to False]
**send_notifications** | **bool** | Send notifications to customer after order was created | [optional] [default to False]
**shipp_address_1** | **str** | Specifies first shipping address | [optional] 
**shipp_address_2** | **str** | Specifies second address line of a shipping street address | [optional] 
**shipp_city** | **str** | Specifies shipping city | [optional] 
**shipp_company** | **str** | Specifies shipping company | [optional] 
**shipp_country** | **str** | Specifies shipping country code | [optional] 
**shipp_fax** | **str** | Specifies shipping fax | [optional] 
**shipp_first_name** | **str** | Specifies shipping first name | [optional] 
**shipp_last_name** | **str** | Specifies shipping last name | [optional] 
**shipp_phone** | **str** | Specifies shipping phone | [optional] 
**shipp_postcode** | **str** | Specifies shipping postcode | [optional] 
**shipp_state** | **str** | Specifies shipping state code | [optional] 
**shipping_price** | **float** | Specifies order&#39;s shipping price | [optional] [default to 0]
**shipping_tax** | **float** | Specifies order&#39;s shipping price tax | [optional] 
**store_id** | **str** | Defines store id where the order should be assigned | [optional] 
**subtotal_price** | **float** | Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts | [optional] 
**tags** | **str** | Order tags | [optional] 
**tax_price** | **float** | The value of tax cost for order | [optional] [default to 0]
**total_paid** | **float** | Defines total paid amount for the order | [optional] 
**total_price** | **float** | Defines order&#39;s total price | [optional] 
**total_weight** | **int** | Defines the sum of all line item weights in grams for the order | [optional] 
**transaction_id** | **str** | Payment transaction id | [optional] 

## Example

```python
from openapi_client.models.order_add import OrderAdd

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAdd from a JSON string
order_add_instance = OrderAdd.from_json(json)
# print the JSON string representation of the object
print(OrderAdd.to_json())

# convert the object into a dict
order_add_dict = order_add_instance.to_dict()
# create an instance of OrderAdd from a dict
order_add_from_dict = OrderAdd.from_dict(order_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


