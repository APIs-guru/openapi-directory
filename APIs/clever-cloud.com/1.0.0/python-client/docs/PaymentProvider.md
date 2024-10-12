# PaymentProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coming_soon** | **bool** |  | [default to False]
**img_url** | **str** |  | 
**name** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.payment_provider import PaymentProvider

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProvider from a JSON string
payment_provider_instance = PaymentProvider.from_json(json)
# print the JSON string representation of the object
print(PaymentProvider.to_json())

# convert the object into a dict
payment_provider_dict = payment_provider_instance.to_dict()
# create an instance of PaymentProvider from a dict
payment_provider_from_dict = PaymentProvider.from_dict(payment_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


