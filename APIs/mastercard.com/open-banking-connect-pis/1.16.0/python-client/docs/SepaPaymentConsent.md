# SepaPaymentConsent

Return the consent data exchanged for PSU authorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Consent Id | 
**consent_request_id** | **str** | Consent Request Id, the same as received from /consent operations. | 

## Example

```python
from openapi_client.models.sepa_payment_consent import SepaPaymentConsent

# TODO update the JSON string below
json = "{}"
# create an instance of SepaPaymentConsent from a JSON string
sepa_payment_consent_instance = SepaPaymentConsent.from_json(json)
# print the JSON string representation of the object
print(SepaPaymentConsent.to_json())

# convert the object into a dict
sepa_payment_consent_dict = sepa_payment_consent_instance.to_dict()
# create an instance of SepaPaymentConsent from a dict
sepa_payment_consent_from_dict = SepaPaymentConsent.from_dict(sepa_payment_consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


