# GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData

Data specific to Android app streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firebase_app_id** | **str** | Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. | [optional] [readonly] 
**package_name** | **str** | Immutable. The package name for the app being measured. Example: \&quot;com.example.myandroidapp\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_data_stream_android_app_stream_data import GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData from a JSON string
google_analytics_admin_v1beta_data_stream_android_app_stream_data_instance = GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_data_stream_android_app_stream_data_dict = google_analytics_admin_v1beta_data_stream_android_app_stream_data_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData from a dict
google_analytics_admin_v1beta_data_stream_android_app_stream_data_from_dict = GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData.from_dict(google_analytics_admin_v1beta_data_stream_android_app_stream_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


