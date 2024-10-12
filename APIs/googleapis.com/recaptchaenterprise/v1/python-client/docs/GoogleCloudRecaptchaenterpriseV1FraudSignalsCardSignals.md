# GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals

Signals describing the payment card used in this transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_labels** | **List[str]** | Output only. The labels for the payment card in this transaction. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals import GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals_instance = GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals_dict = google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals from a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals_from_dict = GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals.from_dict(google_cloud_recaptchaenterprise_v1_fraud_signals_card_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


