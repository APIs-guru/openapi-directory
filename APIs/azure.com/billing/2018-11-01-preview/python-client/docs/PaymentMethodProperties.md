# PaymentMethodProperties

The properties of the payment method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency associated with the payment method. | [optional] [readonly] 
**details** | **str** | Details about the payment method. | [optional] [readonly] 
**expiration** | **datetime** | Expiration date. | [optional] [readonly] 
**payment_method_type** | **str** | Payment method type. | [optional] 

## Example

```python
from openapi_client.models.payment_method_properties import PaymentMethodProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodProperties from a JSON string
payment_method_properties_instance = PaymentMethodProperties.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodProperties.to_json())

# convert the object into a dict
payment_method_properties_dict = payment_method_properties_instance.to_dict()
# create an instance of PaymentMethodProperties from a dict
payment_method_properties_from_dict = PaymentMethodProperties.from_dict(payment_method_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


