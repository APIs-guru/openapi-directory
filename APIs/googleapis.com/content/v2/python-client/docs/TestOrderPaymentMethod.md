# TestOrderPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_month** | **int** | The card expiration month (January &#x3D; 1, February &#x3D; 2 etc.). | [optional] 
**expiration_year** | **int** | The card expiration year (4-digit, e.g. 2015). | [optional] 
**last_four_digits** | **str** | The last four digits of the card number. | [optional] 
**predefined_billing_address** | **str** | The billing address. Acceptable values are: - \&quot;&#x60;dwight&#x60;\&quot; - \&quot;&#x60;jim&#x60;\&quot; - \&quot;&#x60;pam&#x60;\&quot;  | [optional] 
**type** | **str** | The type of instrument. Note that real orders might have different values than the four values accepted by &#x60;createTestOrder&#x60;. Acceptable values are: - \&quot;&#x60;AMEX&#x60;\&quot; - \&quot;&#x60;DISCOVER&#x60;\&quot; - \&quot;&#x60;MASTERCARD&#x60;\&quot; - \&quot;&#x60;VISA&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.test_order_payment_method import TestOrderPaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderPaymentMethod from a JSON string
test_order_payment_method_instance = TestOrderPaymentMethod.from_json(json)
# print the JSON string representation of the object
print(TestOrderPaymentMethod.to_json())

# convert the object into a dict
test_order_payment_method_dict = test_order_payment_method_instance.to_dict()
# create an instance of TestOrderPaymentMethod from a dict
test_order_payment_method_from_dict = TestOrderPaymentMethod.from_dict(test_order_payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


