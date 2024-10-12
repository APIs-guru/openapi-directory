# PaymentMethodCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_urls** | [**AssetUrls**](AssetUrls.md) |  | [optional] 
**identifier** | **str** | ID of the payment method category to be used while loading the widget later. The possible values are:&lt;ul&gt;&lt;li&gt;klarna&lt;/li&gt;&lt;li&gt;pay_later&lt;/li&gt;&lt;li&gt;pay_now&lt;/li&gt;&lt;li&gt;pay_over_time&lt;/li&gt;&lt;li&gt;direct_bank_transfer&lt;/li&gt;&lt;li&gt;direct_debit&lt;/li&gt;&lt;/ul&gt; | [optional] 
**name** | **str** | Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you. | [optional] 

## Example

```python
from openapi_client.models.payment_method_category import PaymentMethodCategory

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodCategory from a JSON string
payment_method_category_instance = PaymentMethodCategory.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodCategory.to_json())

# convert the object into a dict
payment_method_category_dict = payment_method_category_instance.to_dict()
# create an instance of PaymentMethodCategory from a dict
payment_method_category_from_dict = PaymentMethodCategory.from_dict(payment_method_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


