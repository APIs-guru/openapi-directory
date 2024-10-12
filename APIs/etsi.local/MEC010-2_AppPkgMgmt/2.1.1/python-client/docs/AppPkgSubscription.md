# AppPkgSubscription

'The data type represents the input parameters of \"subscription operation\" to notification of application package management for the onboarding, or operational state change of application package.'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_pkg_filter** | **List[str]** |  | [optional] 
**callback_uri** | **str** | The URI of the endpoint for the notification to be sent to. | 
**subsctiption_type** | [**SubsctiptionTypeAppPkg**](SubsctiptionTypeAppPkg.md) |  | 

## Example

```python
from openapi_client.models.app_pkg_subscription import AppPkgSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgSubscription from a JSON string
app_pkg_subscription_instance = AppPkgSubscription.from_json(json)
# print the JSON string representation of the object
print(AppPkgSubscription.to_json())

# convert the object into a dict
app_pkg_subscription_dict = app_pkg_subscription_instance.to_dict()
# create an instance of AppPkgSubscription from a dict
app_pkg_subscription_from_dict = AppPkgSubscription.from_dict(app_pkg_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


