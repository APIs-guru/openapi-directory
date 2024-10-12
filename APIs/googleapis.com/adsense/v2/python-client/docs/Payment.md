# Payment

Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments and the [YouTube homepage and payments account](https://support.google.com/adsense/answer/11622510) article for information about dedicated payments accounts for YouTube.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Output only. The amount of unpaid or paid earnings, as a formatted string, including the currency. E.g. \&quot;¥1,235 JPY\&quot;, \&quot;$1,234.57\&quot;, \&quot;£87.65\&quot;. | [optional] [readonly] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the payment. Format: - accounts/{account}/payments/unpaid for unpaid (current) AdSense earnings. - accounts/{account}/payments/youtube-unpaid for unpaid (current) YouTube earnings. - accounts/{account}/payments/yyyy-MM-dd for paid AdSense earnings. - accounts/{account}/payments/youtube-yyyy-MM-dd for paid YouTube earnings. | [optional] [readonly] 

## Example

```python
from openapi_client.models.payment import Payment

# TODO update the JSON string below
json = "{}"
# create an instance of Payment from a JSON string
payment_instance = Payment.from_json(json)
# print the JSON string representation of the object
print(Payment.to_json())

# convert the object into a dict
payment_dict = payment_instance.to_dict()
# create an instance of Payment from a dict
payment_from_dict = Payment.from_dict(payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


