# GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals

Signals describing the user involved in this transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_days_lower_bound** | **int** | Output only. This user (based on email, phone, and other identifiers) has been seen on the internet for at least this number of days. | [optional] [readonly] 
**synthetic_risk** | **float** | Output only. Likelihood (from 0.0 to 1.0) this user includes synthetic components in their identity, such as a randomly generated email address, temporary phone number, or fake shipping address. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals import GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals_instance = GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals_dict = google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals from a dict
google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals_from_dict = GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals.from_dict(google_cloud_recaptchaenterprise_v1_fraud_signals_user_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


