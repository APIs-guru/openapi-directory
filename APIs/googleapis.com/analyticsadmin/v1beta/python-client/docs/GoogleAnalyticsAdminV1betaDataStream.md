# GoogleAnalyticsAdminV1betaDataStream

A resource message representing a data stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_app_stream_data** | [**GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData**](GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData.md) |  | [optional] 
**create_time** | **str** | Output only. Time when this stream was originally created. | [optional] [readonly] 
**display_name** | **str** | Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. | [optional] 
**ios_app_stream_data** | [**GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData**](GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData.md) |  | [optional] 
**name** | **str** | Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: \&quot;properties/1000/dataStreams/2000\&quot; | [optional] [readonly] 
**type** | **str** | Required. Immutable. The type of this DataStream resource. | [optional] 
**update_time** | **str** | Output only. Time when stream payload fields were last updated. | [optional] [readonly] 
**web_stream_data** | [**GoogleAnalyticsAdminV1betaDataStreamWebStreamData**](GoogleAnalyticsAdminV1betaDataStreamWebStreamData.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_data_stream import GoogleAnalyticsAdminV1betaDataStream

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaDataStream from a JSON string
google_analytics_admin_v1beta_data_stream_instance = GoogleAnalyticsAdminV1betaDataStream.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaDataStream.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_data_stream_dict = google_analytics_admin_v1beta_data_stream_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaDataStream from a dict
google_analytics_admin_v1beta_data_stream_from_dict = GoogleAnalyticsAdminV1betaDataStream.from_dict(google_analytics_admin_v1beta_data_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


