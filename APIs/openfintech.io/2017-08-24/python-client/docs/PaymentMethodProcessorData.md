# PaymentMethodProcessorData

Processor`s Data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Processor&#x60;s id. | [optional] 
**type** | **str** | Processor&#x60;s type. | [optional] 

## Example

```python
from openapi_client.models.payment_method_processor_data import PaymentMethodProcessorData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodProcessorData from a JSON string
payment_method_processor_data_instance = PaymentMethodProcessorData.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodProcessorData.to_json())

# convert the object into a dict
payment_method_processor_data_dict = payment_method_processor_data_instance.to_dict()
# create an instance of PaymentMethodProcessorData from a dict
payment_method_processor_data_from_dict = PaymentMethodProcessorData.from_dict(payment_method_processor_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


