# GoogleAnalyticsAdminV1alphaDataStreamWebStreamData

Data specific to web streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_uri** | **str** | Domain name of the web app being measured, or empty. Example: \&quot;http://www.google.com\&quot;, \&quot;https://www.google.com\&quot; | [optional] 
**firebase_app_id** | **str** | Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. | [optional] [readonly] 
**measurement_id** | **str** | Output only. Analytics Measurement ID. Example: \&quot;G-1A2BCD345E\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_data_stream_web_stream_data import GoogleAnalyticsAdminV1alphaDataStreamWebStreamData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDataStreamWebStreamData from a JSON string
google_analytics_admin_v1alpha_data_stream_web_stream_data_instance = GoogleAnalyticsAdminV1alphaDataStreamWebStreamData.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDataStreamWebStreamData.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_data_stream_web_stream_data_dict = google_analytics_admin_v1alpha_data_stream_web_stream_data_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDataStreamWebStreamData from a dict
google_analytics_admin_v1alpha_data_stream_web_stream_data_from_dict = GoogleAnalyticsAdminV1alphaDataStreamWebStreamData.from_dict(google_analytics_admin_v1alpha_data_stream_web_stream_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


