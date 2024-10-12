# MobileDeviceApplicationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The application&#39;s display name. An example is &#x60;Browser&#x60;. | [optional] 
**package_name** | **str** | The application&#39;s package name. An example is &#x60;com.android.browser&#x60;. | [optional] 
**permission** | **List[str]** | The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application&#39;s [Android manifest](https://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar application&#39;s permissions are &#x60;READ_CALENDAR&#x60;, or &#x60;MANAGE_ACCOUNTS&#x60;. | [optional] 
**version_code** | **int** | The application&#39;s version code. An example is &#x60;13&#x60;. | [optional] 
**version_name** | **str** | The application&#39;s version name. An example is &#x60;3.2-140714&#x60;. | [optional] 

## Example

```python
from openapi_client.models.mobile_device_applications_inner import MobileDeviceApplicationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MobileDeviceApplicationsInner from a JSON string
mobile_device_applications_inner_instance = MobileDeviceApplicationsInner.from_json(json)
# print the JSON string representation of the object
print(MobileDeviceApplicationsInner.to_json())

# convert the object into a dict
mobile_device_applications_inner_dict = mobile_device_applications_inner_instance.to_dict()
# create an instance of MobileDeviceApplicationsInner from a dict
mobile_device_applications_inner_from_dict = MobileDeviceApplicationsInner.from_dict(mobile_device_applications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


