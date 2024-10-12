# SubscriptionLogSettings

Part of Subscription diagnostic setting. Specifies the settings for a particular log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Name of a Subscription Diagnostic Log category for a resource type this setting is applied to. | [optional] 
**enabled** | **bool** | a value indicating whether this log is enabled. | 

## Example

```python
from openapi_client.models.subscription_log_settings import SubscriptionLogSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionLogSettings from a JSON string
subscription_log_settings_instance = SubscriptionLogSettings.from_json(json)
# print the JSON string representation of the object
print(SubscriptionLogSettings.to_json())

# convert the object into a dict
subscription_log_settings_dict = subscription_log_settings_instance.to_dict()
# create an instance of SubscriptionLogSettings from a dict
subscription_log_settings_from_dict = SubscriptionLogSettings.from_dict(subscription_log_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


