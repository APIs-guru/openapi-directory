# AppLinkedAppInfo

Information from the app store if the app is linked to an app store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store_id** | **str** | The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: \&quot;com.example.myapp\&quot;. See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example \&quot;105169111\&quot;. Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked. | [optional] 
**display_name** | **str** | Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_linked_app_info import AppLinkedAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppLinkedAppInfo from a JSON string
app_linked_app_info_instance = AppLinkedAppInfo.from_json(json)
# print the JSON string representation of the object
print(AppLinkedAppInfo.to_json())

# convert the object into a dict
app_linked_app_info_dict = app_linked_app_info_instance.to_dict()
# create an instance of AppLinkedAppInfo from a dict
app_linked_app_info_from_dict = AppLinkedAppInfo.from_dict(app_linked_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


