# PaymentMethodProcessor

Payment-method issuer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PaymentMethodProcessorData**](PaymentMethodProcessorData.md) |  | [optional] 
**links** | [**PaymentMethodProcessorLinks**](PaymentMethodProcessorLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_method_processor import PaymentMethodProcessor

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodProcessor from a JSON string
payment_method_processor_instance = PaymentMethodProcessor.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodProcessor.to_json())

# convert the object into a dict
payment_method_processor_dict = payment_method_processor_instance.to_dict()
# create an instance of PaymentMethodProcessor from a dict
payment_method_processor_from_dict = PaymentMethodProcessor.from_dict(payment_method_processor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


