# SubscriptionTrialSettings

The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_in_trial** | **bool** | Determines if a subscription&#39;s plan is in a 30-day free trial or not: - &#x60;true&#x60; — The plan is in trial. - &#x60;false&#x60; — The plan is not in trial.  | [optional] 
**trial_end_time** | **str** | Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter. | [optional] 

## Example

```python
from openapi_client.models.subscription_trial_settings import SubscriptionTrialSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionTrialSettings from a JSON string
subscription_trial_settings_instance = SubscriptionTrialSettings.from_json(json)
# print the JSON string representation of the object
print(SubscriptionTrialSettings.to_json())

# convert the object into a dict
subscription_trial_settings_dict = subscription_trial_settings_instance.to_dict()
# create an instance of SubscriptionTrialSettings from a dict
subscription_trial_settings_from_dict = SubscriptionTrialSettings.from_dict(subscription_trial_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


