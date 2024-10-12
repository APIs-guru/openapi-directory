# GoogleChromeManagementV1ChromeAppRequest

Details of an app installation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_details** | **str** | Output only. Format: app_details&#x3D;customers/{customer_id}/apps/chrome/{app_id} | [optional] [readonly] 
**app_id** | **str** | Output only. Unique store identifier for the app. Example: \&quot;gmbmikajjgmnabiglmofipeabaddhgne\&quot; for the Save to Google Drive Chrome extension. | [optional] [readonly] 
**detail_uri** | **str** | Output only. The uri for the detail page of the item. | [optional] [readonly] 
**display_name** | **str** | Output only. App&#39;s display name. | [optional] [readonly] 
**icon_uri** | **str** | Output only. A link to an image that can be used as an icon for the product. | [optional] [readonly] 
**latest_request_time** | **str** | Output only. The timestamp of the most recently made request for this app. | [optional] [readonly] 
**request_count** | **str** | Output only. Total count of requests for this app. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_chrome_app_request import GoogleChromeManagementV1ChromeAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ChromeAppRequest from a JSON string
google_chrome_management_v1_chrome_app_request_instance = GoogleChromeManagementV1ChromeAppRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ChromeAppRequest.to_json())

# convert the object into a dict
google_chrome_management_v1_chrome_app_request_dict = google_chrome_management_v1_chrome_app_request_instance.to_dict()
# create an instance of GoogleChromeManagementV1ChromeAppRequest from a dict
google_chrome_management_v1_chrome_app_request_from_dict = GoogleChromeManagementV1ChromeAppRequest.from_dict(google_chrome_management_v1_chrome_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


