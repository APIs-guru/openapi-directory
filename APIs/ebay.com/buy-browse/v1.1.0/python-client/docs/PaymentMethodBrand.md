# PaymentMethodBrand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_image** | [**Image**](Image.md) |  | [optional] 
**payment_method_brand_type** | **str** | The payment method brand, such as Visa or PayPal. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:PaymentMethodBrandEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.payment_method_brand import PaymentMethodBrand

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodBrand from a JSON string
payment_method_brand_instance = PaymentMethodBrand.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodBrand.to_json())

# convert the object into a dict
payment_method_brand_dict = payment_method_brand_instance.to_dict()
# create an instance of PaymentMethodBrand from a dict
payment_method_brand_from_dict = PaymentMethodBrand.from_dict(payment_method_brand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


