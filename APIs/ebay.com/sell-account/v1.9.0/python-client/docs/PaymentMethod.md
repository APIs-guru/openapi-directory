# PaymentMethod

This type is used by the <b>paymentMethods</b> container, which is used by the seller to specify one or more offline payment methods. <br /><br /> <span class=\"tablenote\"><b>Note</b>: eBay now controls all electronic payment methods available for a marketplace, so a seller will no longer use this type to specify any electronic payment methods.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brands** | **List[str]** | &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note&lt;/b&gt;: This array is no longer applicable and should not be used. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods, including any credit card brands accepted. &lt;/span&gt; | [optional] 
**payment_method_type** | **str** | eBay now controls all electronic payment methods available for a marketplace, so only offline payment method enum values may be used in this field, and offline payment methods will only be applicable to listings that require or support offline payments. See the &lt;b&gt;PaymentMethodTypeEnum&lt;/b&gt; type for supported offline payment method enum values. &lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:PaymentMethodTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**recipient_account_reference** | [**RecipientAccountReference**](RecipientAccountReference.md) |  | [optional] 

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


