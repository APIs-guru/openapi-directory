# AppVersion

This represents a single version of the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_production** | **bool** | True if this version is a production APK. | [optional] 
**target_sdk_version** | **int** | The SDK version this app targets, as specified in the manifest of the APK. See http://developer.android.com/guide/topics/manifest/uses-sdk-element.html | [optional] 
**track** | **str** | Deprecated, use trackId instead. | [optional] 
**track_id** | **List[str]** | Track ids that the app version is published in. Replaces the track field (deprecated), but doesn&#39;t include the production track (see isProduction instead). | [optional] 
**version_code** | **int** | Unique increasing identifier for the app version. | [optional] 
**version_string** | **str** | The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be \&quot;1.4\&quot;). | [optional] 

## Example

```python
from openapi_client.models.app_version import AppVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AppVersion from a JSON string
app_version_instance = AppVersion.from_json(json)
# print the JSON string representation of the object
print(AppVersion.to_json())

# convert the object into a dict
app_version_dict = app_version_instance.to_dict()
# create an instance of AppVersion from a dict
app_version_from_dict = AppVersion.from_dict(app_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


