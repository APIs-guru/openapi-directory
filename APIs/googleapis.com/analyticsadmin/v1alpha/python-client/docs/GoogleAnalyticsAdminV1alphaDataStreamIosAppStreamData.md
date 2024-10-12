# GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData

Data specific to iOS app streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | Required. Immutable. The Apple App Store Bundle ID for the app Example: \&quot;com.example.myiosapp\&quot; | [optional] 
**firebase_app_id** | **str** | Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_data_stream_ios_app_stream_data import GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData from a JSON string
google_analytics_admin_v1alpha_data_stream_ios_app_stream_data_instance = GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_data_stream_ios_app_stream_data_dict = google_analytics_admin_v1alpha_data_stream_ios_app_stream_data_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData from a dict
google_analytics_admin_v1alpha_data_stream_ios_app_stream_data_from_dict = GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData.from_dict(google_analytics_admin_v1alpha_data_stream_ios_app_stream_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


