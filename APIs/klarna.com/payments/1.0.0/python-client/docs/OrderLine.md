# OrderLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** | URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).  A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won&#39;t even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB. | [optional] 
**merchant_data** | **str** | Used for storing merchant&#39;s internal order number or other reference. Pass through field. (max 1024 characters) | [optional] 
**name** | **str** | Descriptive name of the order line item. | 
**product_identifiers** | [**ProductIdentifiers**](ProductIdentifiers.md) |  | [optional] 
**product_url** | **str** | URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters) | [optional] 
**quantity** | **int** | Quantity of the order line item. Must be a non-negative number. | 
**quantity_unit** | **str** | Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters. | [optional] 
**reference** | **str** | Client facing article number, SKU or similar. Max length is 256 characters. | [optional] 
**subscription** | [**Subscription**](Subscription.md) |  | [optional] 
**tax_rate** | **int** | Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 &#x3D; 19%. | [optional] 
**total_amount** | **int** | Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500&#x3D;25 euros Value &#x3D; (quantity x unit_price) - total_discount_amount.  (max value: 100000000) | 
**total_discount_amount** | **int** | Non-negative minor units. Includes tax. Eg: 500&#x3D;5 euros | [optional] 
**total_tax_amount** | **int** | Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount. | [optional] 
**type** | **str** | Type of the order line item. The possible values are:  physical discount shipping_fee sales_tax digital gift_card store_credit surcharge | [optional] 
**unit_price** | **int** | Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000) | 

## Example

```python
from openapi_client.models.order_line import OrderLine

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLine from a JSON string
order_line_instance = OrderLine.from_json(json)
# print the JSON string representation of the object
print(OrderLine.to_json())

# convert the object into a dict
order_line_dict = order_line_instance.to_dict()
# create an instance of OrderLine from a dict
order_line_from_dict = OrderLine.from_dict(order_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


