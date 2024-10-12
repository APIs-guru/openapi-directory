# GoogleAppsCloudidentityDevicesV1AndroidAttributes

Resource representing the Android specific attributes of a Device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cts_profile_match** | **bool** | Whether the device passes Android CTS compliance. | [optional] 
**enabled_unknown_sources** | **bool** | Whether applications from unknown sources can be installed on device. | [optional] 
**has_potentially_harmful_apps** | **bool** | Whether any potentially harmful apps were detected on the device. | [optional] 
**owner_profile_account** | **bool** | Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. | [optional] 
**ownership_privilege** | **str** | Ownership privileges on device. | [optional] 
**supports_work_profile** | **bool** | Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the \&quot;Enforce Work Profile\&quot; policy. | [optional] 
**verified_boot** | **bool** | Whether Android verified boot status is GREEN. | [optional] 
**verify_apps_enabled** | **bool** | Whether Google Play Protect Verify Apps is enabled. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_android_attributes import GoogleAppsCloudidentityDevicesV1AndroidAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1AndroidAttributes from a JSON string
google_apps_cloudidentity_devices_v1_android_attributes_instance = GoogleAppsCloudidentityDevicesV1AndroidAttributes.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1AndroidAttributes.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_android_attributes_dict = google_apps_cloudidentity_devices_v1_android_attributes_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1AndroidAttributes from a dict
google_apps_cloudidentity_devices_v1_android_attributes_from_dict = GoogleAppsCloudidentityDevicesV1AndroidAttributes.from_dict(google_apps_cloudidentity_devices_v1_android_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


