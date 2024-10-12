# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this Payment. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#payment. | [optional] [default to 'adsense#payment']
**payment_amount** | **str** | The amount to be paid. | [optional] 
**payment_amount_currency_code** | **str** | The currency code for the amount to be paid. | [optional] 
**payment_date** | **str** | The date this payment was/will be credited to the user, or none if the payment threshold has not been met. | [optional] 

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


