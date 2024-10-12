# PaymentProperties

The properties of the payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**var_date** | **datetime** | The date of the payment. | [optional] [readonly] 
**payment_type** | **str** | The type of payment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.payment_properties import PaymentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProperties from a JSON string
payment_properties_instance = PaymentProperties.from_json(json)
# print the JSON string representation of the object
print(PaymentProperties.to_json())

# convert the object into a dict
payment_properties_dict = payment_properties_instance.to_dict()
# create an instance of PaymentProperties from a dict
payment_properties_from_dict = PaymentProperties.from_dict(payment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


