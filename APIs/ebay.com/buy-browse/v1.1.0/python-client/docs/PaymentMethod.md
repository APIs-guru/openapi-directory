# PaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_instructions** | **List[str]** | The payment instructions for the buyer, such as cash in person or contact seller. | [optional] 
**payment_method_brands** | [**List[PaymentMethodBrand]**](PaymentMethodBrand.md) | The payment method brands, including the payment method brand type and logo image. | [optional] 
**payment_method_type** | **str** | The payment method type, such as credit card or cash. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:PaymentMethodTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**seller_instructions** | **List[str]** | The seller instructions to the buyer, such as accepts credit cards or see description. | [optional] 

## Example

```python
from openapi_client.models.payment_method import PaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethod from a JSON string
payment_method_instance = PaymentMethod.from_json(json)
# print the JSON string representation of the object
print(PaymentMethod.to_json())

# convert the object into a dict
payment_method_dict = payment_method_instance.to_dict()
# create an instance of PaymentMethod from a dict
payment_method_from_dict = PaymentMethod.from_dict(payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


