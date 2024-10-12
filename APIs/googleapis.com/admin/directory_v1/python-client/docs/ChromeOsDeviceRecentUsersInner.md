# ChromeOsDeviceRecentUsersInner

A list of recent device users, in descending order, by last login time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address. This is only present if the user type is &#x60;USER_TYPE_MANAGED&#x60;. | [optional] 
**type** | **str** | The type of the user. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_recent_users_inner import ChromeOsDeviceRecentUsersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceRecentUsersInner from a JSON string
chrome_os_device_recent_users_inner_instance = ChromeOsDeviceRecentUsersInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceRecentUsersInner.to_json())

# convert the object into a dict
chrome_os_device_recent_users_inner_dict = chrome_os_device_recent_users_inner_instance.to_dict()
# create an instance of ChromeOsDeviceRecentUsersInner from a dict
chrome_os_device_recent_users_inner_from_dict = ChromeOsDeviceRecentUsersInner.from_dict(chrome_os_device_recent_users_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


