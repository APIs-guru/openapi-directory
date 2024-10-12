# AppPkgSubscriptionInfo

'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AppPkgSubscriptionInfoLinks**](AppPkgSubscriptionInfoLinks.md) |  | 
**callback_uri** | **str** | The URI of the endpoint for the notification to be sent to. | 
**id** | **str** | &#39;&#39; | 
**subscription_type** | [**AppPkgSubscriptionType**](AppPkgSubscriptionType.md) |  | 

## Example

```python
from openapi_client.models.app_pkg_subscription_info import AppPkgSubscriptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgSubscriptionInfo from a JSON string
app_pkg_subscription_info_instance = AppPkgSubscriptionInfo.from_json(json)
# print the JSON string representation of the object
print(AppPkgSubscriptionInfo.to_json())

# convert the object into a dict
app_pkg_subscription_info_dict = app_pkg_subscription_info_instance.to_dict()
# create an instance of AppPkgSubscriptionInfo from a dict
app_pkg_subscription_info_from_dict = AppPkgSubscriptionInfo.from_dict(app_pkg_subscription_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


