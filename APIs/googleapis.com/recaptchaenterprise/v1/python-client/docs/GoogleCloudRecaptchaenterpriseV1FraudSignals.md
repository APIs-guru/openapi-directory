# GoogleCloudRecaptchaenterpriseV1FraudSignals

Fraud signals describing users and cards involved in the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_signals** | [**GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals**](GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals.md) |  | [optional] 
**user_signals** | [**GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals**](GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_signals import GoogleCloudRecaptchaenterpriseV1FraudSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignals from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_signals_instance = GoogleCloudRecaptchaenterpriseV1FraudSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudSignals.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_dict = google_cloud_recaptchaenterprise_v1_fraud_signals_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignals from a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_from_dict = GoogleCloudRecaptchaenterpriseV1FraudSignals.from_dict(google_cloud_recaptchaenterprise_v1_fraud_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


