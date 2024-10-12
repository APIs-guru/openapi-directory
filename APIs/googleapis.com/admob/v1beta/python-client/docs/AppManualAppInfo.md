# AppManualAppInfo

Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. | [optional] 

## Example

```python
from openapi_client.models.app_manual_app_info import AppManualAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppManualAppInfo from a JSON string
app_manual_app_info_instance = AppManualAppInfo.from_json(json)
# print the JSON string representation of the object
print(AppManualAppInfo.to_json())

# convert the object into a dict
app_manual_app_info_dict = app_manual_app_info_instance.to_dict()
# create an instance of AppManualAppInfo from a dict
app_manual_app_info_from_dict = AppManualAppInfo.from_dict(app_manual_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


