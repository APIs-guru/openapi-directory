# MerchantUrls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **str** | URL for receiving the authorization token when payment is completed. Used for Authorization Callback. | [optional] 
**confirmation** | **str** | URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters). | [optional] 
**notification** | **str** | URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters). | [optional] 
**push** | **str** | URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters). | [optional] 

## Example

```python
from openapi_client.models.merchant_urls import MerchantUrls

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantUrls from a JSON string
merchant_urls_instance = MerchantUrls.from_json(json)
# print the JSON string representation of the object
print(MerchantUrls.to_json())

# convert the object into a dict
merchant_urls_dict = merchant_urls_instance.to_dict()
# create an instance of MerchantUrls from a dict
merchant_urls_from_dict = MerchantUrls.from_dict(merchant_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


