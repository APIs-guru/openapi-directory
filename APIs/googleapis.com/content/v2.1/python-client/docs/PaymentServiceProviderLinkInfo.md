# PaymentServiceProviderLinkInfo

Additional information required for PAYMENT_SERVICE_PROVIDER link type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_account_business_country** | **str** | The business country of the merchant account as identified by the third party service provider. | [optional] 
**external_account_id** | **str** | The id used by the third party service provider to identify the merchant. | [optional] 

## Example

```python
from openapi_client.models.payment_service_provider_link_info import PaymentServiceProviderLinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentServiceProviderLinkInfo from a JSON string
payment_service_provider_link_info_instance = PaymentServiceProviderLinkInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentServiceProviderLinkInfo.to_json())

# convert the object into a dict
payment_service_provider_link_info_dict = payment_service_provider_link_info_instance.to_dict()
# create an instance of PaymentServiceProviderLinkInfo from a dict
payment_service_provider_link_info_from_dict = PaymentServiceProviderLinkInfo.from_dict(payment_service_provider_link_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


