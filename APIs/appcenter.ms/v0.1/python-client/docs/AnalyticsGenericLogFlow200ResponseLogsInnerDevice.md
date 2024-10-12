# AnalyticsGenericLogFlow200ResponseLogsInnerDevice

Device characteristics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_build** | **str** | The app&#39;s build number, e.g. 42.  | 
**app_namespace** | **str** | The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.  | [optional] 
**app_version** | **str** | Application version name, e.g. 1.1.0  | 
**carrier_code** | **str** | Carrier country code (for mobile devices).  | [optional] 
**carrier_country** | **str** | Carrier country.  | [optional] 
**carrier_name** | **str** | Carrier name (for mobile devices).  | [optional] 
**live_update_deployment_key** | **str** | Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.  | [optional] 
**live_update_package_hash** | **str** | Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.  | [optional] 
**live_update_release_label** | **str** | Label that is used to identify application code &#39;version&#39; released via Live Update beacon running on device  | [optional] 
**locale** | **str** | Language code (example: en_US).  | 
**model** | **str** | Device model (example: iPad2,3).  | [optional] 
**oem_name** | **str** | Device manufacturer (example: HTC).  | [optional] 
**os_api_level** | **int** | API level when applicable like in Android (example: 15).  | [optional] 
**os_build** | **str** | OS build code (example: LMY47X).  | [optional] 
**os_name** | **str** | OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.  | 
**os_version** | **str** | OS version (example: 9.3.0).  | 
**screen_size** | **str** | Screen size of the device in pixels (example: 640x480).  | [optional] 
**sdk_name** | **str** | Name of the SDK. Consists of the name of the SDK and the platform, e.g. \&quot;appcenter.ios\&quot;, \&quot;hockeysdk.android\&quot;.  | 
**sdk_version** | **str** | Version of the SDK in semver format, e.g. \&quot;1.2.0\&quot; or \&quot;0.12.3-alpha.1\&quot;.  | 
**time_zone_offset** | **int** | The offset in minutes from UTC for the device time zone, including daylight savings time.  | 
**wrapper_runtime_version** | **str** | Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.  | [optional] 
**wrapper_sdk_name** | **str** | Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. \&quot;appcenter.xamarin\&quot;, \&quot;hockeysdk.cordova\&quot;.  | [optional] 
**wrapper_sdk_version** | **str** | Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.  | [optional] 

## Example

```python
from openapi_client.models.analytics_generic_log_flow200_response_logs_inner_device import AnalyticsGenericLogFlow200ResponseLogsInnerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsGenericLogFlow200ResponseLogsInnerDevice from a JSON string
analytics_generic_log_flow200_response_logs_inner_device_instance = AnalyticsGenericLogFlow200ResponseLogsInnerDevice.from_json(json)
# print the JSON string representation of the object
print(AnalyticsGenericLogFlow200ResponseLogsInnerDevice.to_json())

# convert the object into a dict
analytics_generic_log_flow200_response_logs_inner_device_dict = analytics_generic_log_flow200_response_logs_inner_device_instance.to_dict()
# create an instance of AnalyticsGenericLogFlow200ResponseLogsInnerDevice from a dict
analytics_generic_log_flow200_response_logs_inner_device_from_dict = AnalyticsGenericLogFlow200ResponseLogsInnerDevice.from_dict(analytics_generic_log_flow200_response_logs_inner_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


