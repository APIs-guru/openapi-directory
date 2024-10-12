# PaymentMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PaymentMethod]**](PaymentMethod.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_methods_response import PaymentMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodsResponse from a JSON string
payment_methods_response_instance = PaymentMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodsResponse.to_json())

# convert the object into a dict
payment_methods_response_dict = payment_methods_response_instance.to_dict()
# create an instance of PaymentMethodsResponse from a dict
payment_methods_response_from_dict = PaymentMethodsResponse.from_dict(payment_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


