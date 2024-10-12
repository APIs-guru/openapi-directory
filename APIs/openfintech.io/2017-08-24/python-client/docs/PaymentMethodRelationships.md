# PaymentMethodRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencies** | [**PaymentMethodCurrencies**](PaymentMethodCurrencies.md) |  | [optional] 
**payment_processor** | [**PaymentMethodProcessor**](PaymentMethodProcessor.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_method_relationships import PaymentMethodRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodRelationships from a JSON string
payment_method_relationships_instance = PaymentMethodRelationships.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodRelationships.to_json())

# convert the object into a dict
payment_method_relationships_dict = payment_method_relationships_instance.to_dict()
# create an instance of PaymentMethodRelationships from a dict
payment_method_relationships_from_dict = PaymentMethodRelationships.from_dict(payment_method_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


