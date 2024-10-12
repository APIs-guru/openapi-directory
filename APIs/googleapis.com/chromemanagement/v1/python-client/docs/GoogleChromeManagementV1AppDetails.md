# GoogleChromeManagementV1AppDetails

Resource representing app details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_app_info** | [**GoogleChromeManagementV1AndroidAppInfo**](GoogleChromeManagementV1AndroidAppInfo.md) |  | [optional] 
**app_id** | **str** | Output only. Unique store identifier for the item. Examples: \&quot;gmbmikajjgmnabiglmofipeabaddhgne\&quot; for the Save to Google Drive Chrome extension, \&quot;com.google.android.apps.docs\&quot; for the Google Drive Android app. | [optional] [readonly] 
**chrome_app_info** | [**GoogleChromeManagementV1ChromeAppInfo**](GoogleChromeManagementV1ChromeAppInfo.md) |  | [optional] 
**description** | **str** | Output only. App&#39;s description. | [optional] [readonly] 
**detail_uri** | **str** | Output only. The uri for the detail page of the item. | [optional] [readonly] 
**display_name** | **str** | Output only. App&#39;s display name. | [optional] [readonly] 
**first_publish_time** | **str** | Output only. First published time. | [optional] [readonly] 
**homepage_uri** | **str** | Output only. Home page or Website uri. | [optional] [readonly] 
**icon_uri** | **str** | Output only. A link to an image that can be used as an icon for the product. | [optional] [readonly] 
**is_paid_app** | **bool** | Output only. Indicates if the app has to be paid for OR has paid content. | [optional] [readonly] 
**latest_publish_time** | **str** | Output only. Latest published time. | [optional] [readonly] 
**name** | **str** | Output only. Format: name&#x3D;customers/{customer_id}/apps/{chrome|android|web}/{app_id}@{version} | [optional] [readonly] 
**privacy_policy_uri** | **str** | Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found. | [optional] [readonly] 
**publisher** | **str** | Output only. The publisher of the item. | [optional] [readonly] 
**review_number** | **str** | Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app. | [optional] [readonly] 
**review_rating** | **float** | Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app. | [optional] [readonly] 
**revision_id** | **str** | Output only. App version. A new revision is committed whenever a new version of the app is published. | [optional] [readonly] 
**service_error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**type** | **str** | Output only. App type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_app_details import GoogleChromeManagementV1AppDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1AppDetails from a JSON string
google_chrome_management_v1_app_details_instance = GoogleChromeManagementV1AppDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1AppDetails.to_json())

# convert the object into a dict
google_chrome_management_v1_app_details_dict = google_chrome_management_v1_app_details_instance.to_dict()
# create an instance of GoogleChromeManagementV1AppDetails from a dict
google_chrome_management_v1_app_details_from_dict = GoogleChromeManagementV1AppDetails.from_dict(google_chrome_management_v1_app_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


