# MerchantSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_token** | **str** | Client token to be passed to the JS client while initializing the JS SDK in the next step. | 
**payment_method_categories** | [**List[PaymentMethodCategory]**](PaymentMethodCategory.md) | Available payment method categories for this particular session | [optional] 
**session_id** | **str** | ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration. | 

## Example

```python
from openapi_client.models.merchant_session import MerchantSession

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantSession from a JSON string
merchant_session_instance = MerchantSession.from_json(json)
# print the JSON string representation of the object
print(MerchantSession.to_json())

# convert the object into a dict
merchant_session_dict = merchant_session_instance.to_dict()
# create an instance of MerchantSession from a dict
merchant_session_from_dict = MerchantSession.from_dict(merchant_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


