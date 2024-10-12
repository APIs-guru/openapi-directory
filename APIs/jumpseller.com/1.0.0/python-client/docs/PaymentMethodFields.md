# PaymentMethodFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the Payment Method | [optional] 
**name** | **str** | Name of the Payment Method | [optional] 
**type** | **str** | Type of the Payment Method | [optional] 

## Example

```python
from openapi_client.models.payment_method_fields import PaymentMethodFields

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodFields from a JSON string
payment_method_fields_instance = PaymentMethodFields.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodFields.to_json())

# convert the object into a dict
payment_method_fields_dict = payment_method_fields_instance.to_dict()
# create an instance of PaymentMethodFields from a dict
payment_method_fields_from_dict = PaymentMethodFields.from_dict(payment_method_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


