# PaymentProvidersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PaymentProvider]**](PaymentProvider.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_providers_response import PaymentProvidersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProvidersResponse from a JSON string
payment_providers_response_instance = PaymentProvidersResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentProvidersResponse.to_json())

# convert the object into a dict
payment_providers_response_dict = payment_providers_response_instance.to_dict()
# create an instance of PaymentProvidersResponse from a dict
payment_providers_response_from_dict = PaymentProvidersResponse.from_dict(payment_providers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


