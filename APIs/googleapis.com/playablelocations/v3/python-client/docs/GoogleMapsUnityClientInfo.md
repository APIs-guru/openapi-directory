# GoogleMapsUnityClientInfo

Client information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_client** | **str** | API client name and version. For example, the SDK calling the API. The exact format is up to the client. | [optional] 
**application_id** | **str** | Application ID, such as the package name on Android and the bundle identifier on iOS platforms. | [optional] 
**application_version** | **str** | Application version number, such as \&quot;1.2.3\&quot;. The exact format is application-dependent. | [optional] 
**device_model** | **str** | Device model as reported by the device. The exact format is platform-dependent. | [optional] 
**language_code** | **str** | Language code (in BCP-47 format) indicating the UI language of the client. Examples are \&quot;en\&quot;, \&quot;en-US\&quot; or \&quot;ja-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**operating_system** | **str** | Operating system name and version as reported by the OS. For example, \&quot;Mac OS X 10.10.4\&quot;. The exact format is platform-dependent. | [optional] 
**operating_system_build** | **str** | Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl \&quot;kern.osversion\&quot; in iOS. | [optional] 
**platform** | **str** | Platform where the application is running. | [optional] 

## Example

```python
from openapi_client.models.google_maps_unity_client_info import GoogleMapsUnityClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsUnityClientInfo from a JSON string
google_maps_unity_client_info_instance = GoogleMapsUnityClientInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsUnityClientInfo.to_json())

# convert the object into a dict
google_maps_unity_client_info_dict = google_maps_unity_client_info_instance.to_dict()
# create an instance of GoogleMapsUnityClientInfo from a dict
google_maps_unity_client_info_from_dict = GoogleMapsUnityClientInfo.from_dict(google_maps_unity_client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


