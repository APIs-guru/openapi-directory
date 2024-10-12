# PaymentProviderRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**PaymentProviderOrganization**](PaymentProviderOrganization.md) |  | [optional] 
**payment_methods** | [**PaymentProviderPaymentMethods**](PaymentProviderPaymentMethods.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_relationships import PaymentProviderRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderRelationships from a JSON string
payment_provider_relationships_instance = PaymentProviderRelationships.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderRelationships.to_json())

# convert the object into a dict
payment_provider_relationships_dict = payment_provider_relationships_instance.to_dict()
# create an instance of PaymentProviderRelationships from a dict
payment_provider_relationships_from_dict = PaymentProviderRelationships.from_dict(payment_provider_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


