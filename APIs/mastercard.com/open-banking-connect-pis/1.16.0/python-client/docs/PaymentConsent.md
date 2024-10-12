# PaymentConsent

Return the consent data exchanged for PSU authorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Consent Id | 
**consent_request_id** | **str** | Consent Request Id, the same as received from /consent operations. | 
**signature_status** | [**SignatureValidationStatus**](SignatureValidationStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_consent import PaymentConsent

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentConsent from a JSON string
payment_consent_instance = PaymentConsent.from_json(json)
# print the JSON string representation of the object
print(PaymentConsent.to_json())

# convert the object into a dict
payment_consent_dict = payment_consent_instance.to_dict()
# create an instance of PaymentConsent from a dict
payment_consent_from_dict = PaymentConsent.from_dict(payment_consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


