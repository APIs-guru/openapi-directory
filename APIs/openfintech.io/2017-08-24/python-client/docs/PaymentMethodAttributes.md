# PaymentMethodAttributes

Array of Payment-method attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**code** | **str** | Payment-method&#x60;s code | [optional] 
**name** | **str** | Payment-method&#x60;s name | [optional] 
**processor_name** | **str** | Payment-method&#x60;s processor | [optional] 

## Example

```python
from openapi_client.models.payment_method_attributes import PaymentMethodAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodAttributes from a JSON string
payment_method_attributes_instance = PaymentMethodAttributes.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodAttributes.to_json())

# convert the object into a dict
payment_method_attributes_dict = payment_method_attributes_instance.to_dict()
# create an instance of PaymentMethodAttributes from a dict
payment_method_attributes_from_dict = PaymentMethodAttributes.from_dict(payment_method_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


