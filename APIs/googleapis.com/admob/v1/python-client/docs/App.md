# App

Describes an AdMob app for a specific platform (For example: Android or iOS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_approval_state** | **str** | Output only. The approval state for the app. The field is read-only. | [optional] [readonly] 
**app_id** | **str** | The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789 | [optional] 
**linked_app_info** | [**AppLinkedAppInfo**](AppLinkedAppInfo.md) |  | [optional] 
**manual_app_info** | [**AppManualAppInfo**](AppManualAppInfo.md) |  | [optional] 
**name** | **str** | Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789 | [optional] 
**platform** | **str** | Describes the platform of the app. Limited to \&quot;IOS\&quot; and \&quot;ANDROID\&quot;. | [optional] 

## Example

```python
from openapi_client.models.app import App

# TODO update the JSON string below
json = "{}"
# create an instance of App from a JSON string
app_instance = App.from_json(json)
# print the JSON string representation of the object
print(App.to_json())

# convert the object into a dict
app_dict = app_instance.to_dict()
# create an instance of App from a dict
app_from_dict = App.from_dict(app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


