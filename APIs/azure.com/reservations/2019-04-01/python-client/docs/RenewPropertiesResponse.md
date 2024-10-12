# RenewPropertiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_currency_total** | [**RenewPropertiesResponseBillingCurrencyTotal**](RenewPropertiesResponseBillingCurrencyTotal.md) |  | [optional] 
**pricing_currency_total** | [**RenewPropertiesResponsePricingCurrencyTotal**](RenewPropertiesResponsePricingCurrencyTotal.md) |  | [optional] 
**purchase_properties** | [**PurchaseRequest**](PurchaseRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.renew_properties_response import RenewPropertiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RenewPropertiesResponse from a JSON string
renew_properties_response_instance = RenewPropertiesResponse.from_json(json)
# print the JSON string representation of the object
print(RenewPropertiesResponse.to_json())

# convert the object into a dict
renew_properties_response_dict = renew_properties_response_instance.to_dict()
# create an instance of RenewPropertiesResponse from a dict
renew_properties_response_from_dict = RenewPropertiesResponse.from_dict(renew_properties_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


