# CreateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_token** | **str** | Authorization token. | [optional] [readonly] 
**auto_capture** | **bool** | Allow merchant to trigger auto capturing. | [optional] [default to False]
**billing_address** | [**Address**](Address.md) |  | [optional] 
**custom_payment_method_ids** | **List[str]** | Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications.  | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**locale** | **str** | Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country. The following values are applicable:  AT: \&quot;de-AT\&quot;, \&quot;de-DE\&quot;, \&quot;en-DE\&quot; BE: \&quot;be-BE\&quot;, \&quot;nl-BE\&quot;, \&quot;fr-BE\&quot;, \&quot;en-BE\&quot; CH: \&quot;it-CH\&quot;, \&quot;de-CH\&quot;, \&quot;fr-CH\&quot;, \&quot;en-CH\&quot; DE: \&quot;de-DE\&quot;, \&quot;de-AT\&quot;, \&quot;en-DE\&quot; DK: \&quot;da-DK\&quot;, \&quot;en-DK\&quot; ES: \&quot;es-ES\&quot;, \&quot;ca-ES\&quot;, \&quot;en-ES\&quot; FI: \&quot;fi-FI\&quot;, \&quot;sv-FI\&quot;, \&quot;en-FI\&quot; GB: \&quot;en-GB\&quot; IT: \&quot;it-IT\&quot;, \&quot;en-IT\&quot; NL: \&quot;nl-NL\&quot;, \&quot;en-NL\&quot; NO: \&quot;nb-NO\&quot;, \&quot;en-NO\&quot; PL: \&quot;pl-PL\&quot;, \&quot;en-PL\&quot; SE: \&quot;sv-SE\&quot;, \&quot;en-SE\&quot; US: \&quot;en-US\&quot;. | [optional] 
**merchant_data** | **str** | Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters) | [optional] 
**merchant_reference1** | **str** | Used for storing merchant&#39;s internal order number or other reference. | [optional] 
**merchant_reference2** | **str** | Used for storing merchant&#39;s internal order number or other reference. The value is available in the settlement files. (max 255 characters). | [optional] 
**merchant_urls** | [**MerchantUrls**](MerchantUrls.md) |  | [optional] 
**order_amount** | **int** | Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500. | 
**order_lines** | [**List[OrderLine]**](OrderLine.md) | The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order. | 
**order_tax_amount** | **int** | Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500. | [optional] 
**payment_method_categories** | [**List[PaymentMethodCategory]**](PaymentMethodCategory.md) | Available payment method categories | [optional] [readonly] 
**purchase_country** | **str** | The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc. | 
**purchase_currency** | **str** | The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc. | 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**status** | **str** | The current status of the session. Possible values: &#39;complete&#39;, &#39;incomplete&#39; where &#39;complete&#39; is set when the order has been placed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_order_request import CreateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequest from a JSON string
create_order_request_instance = CreateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequest.to_json())

# convert the object into a dict
create_order_request_dict = create_order_request_instance.to_dict()
# create an instance of CreateOrderRequest from a dict
create_order_request_from_dict = CreateOrderRequest.from_dict(create_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


