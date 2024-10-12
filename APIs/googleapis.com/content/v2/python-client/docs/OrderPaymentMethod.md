# OrderPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**expiration_month** | **int** | The card expiration month (January &#x3D; 1, February &#x3D; 2 etc.). | [optional] 
**expiration_year** | **int** | The card expiration year (4-digit, e.g. 2015). | [optional] 
**last_four_digits** | **str** | The last four digits of the card number. | [optional] 
**phone_number** | **str** | The billing phone number. | [optional] 
**type** | **str** | The type of instrument. Acceptable values are: - \&quot;&#x60;AMEX&#x60;\&quot; - \&quot;&#x60;DISCOVER&#x60;\&quot; - \&quot;&#x60;JCB&#x60;\&quot; - \&quot;&#x60;MASTERCARD&#x60;\&quot; - \&quot;&#x60;UNIONPAY&#x60;\&quot; - \&quot;&#x60;VISA&#x60;\&quot; - \&quot;&#x60;&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_payment_method import OrderPaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPaymentMethod from a JSON string
order_payment_method_instance = OrderPaymentMethod.from_json(json)
# print the JSON string representation of the object
print(OrderPaymentMethod.to_json())

# convert the object into a dict
order_payment_method_dict = order_payment_method_instance.to_dict()
# create an instance of OrderPaymentMethod from a dict
order_payment_method_from_dict = OrderPaymentMethod.from_dict(order_payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


