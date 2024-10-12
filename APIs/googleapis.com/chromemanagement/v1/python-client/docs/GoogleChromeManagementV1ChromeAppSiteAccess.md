# GoogleChromeManagementV1ChromeAppSiteAccess

Represent one host permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_match** | **str** | Output only. This can contain very specific hosts, or patterns like \&quot;*.com\&quot; for instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_chrome_app_site_access import GoogleChromeManagementV1ChromeAppSiteAccess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ChromeAppSiteAccess from a JSON string
google_chrome_management_v1_chrome_app_site_access_instance = GoogleChromeManagementV1ChromeAppSiteAccess.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ChromeAppSiteAccess.to_json())

# convert the object into a dict
google_chrome_management_v1_chrome_app_site_access_dict = google_chrome_management_v1_chrome_app_site_access_instance.to_dict()
# create an instance of GoogleChromeManagementV1ChromeAppSiteAccess from a dict
google_chrome_management_v1_chrome_app_site_access_from_dict = GoogleChromeManagementV1ChromeAppSiteAccess.from_dict(google_chrome_management_v1_chrome_app_site_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


