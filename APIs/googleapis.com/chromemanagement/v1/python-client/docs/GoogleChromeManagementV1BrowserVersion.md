# GoogleChromeManagementV1BrowserVersion

Describes a browser version and its install count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Output only. The release channel of the installed browser. | [optional] [readonly] 
**count** | **str** | Output only. Count grouped by device_system and major version | [optional] [readonly] 
**device_os_version** | **str** | Output only. Version of the system-specified operating system. | [optional] [readonly] 
**system** | **str** | Output only. The device operating system. | [optional] [readonly] 
**version** | **str** | Output only. The full version of the installed browser. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_browser_version import GoogleChromeManagementV1BrowserVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1BrowserVersion from a JSON string
google_chrome_management_v1_browser_version_instance = GoogleChromeManagementV1BrowserVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1BrowserVersion.to_json())

# convert the object into a dict
google_chrome_management_v1_browser_version_dict = google_chrome_management_v1_browser_version_instance.to_dict()
# create an instance of GoogleChromeManagementV1BrowserVersion from a dict
google_chrome_management_v1_browser_version_from_dict = GoogleChromeManagementV1BrowserVersion.from_dict(google_chrome_management_v1_browser_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


