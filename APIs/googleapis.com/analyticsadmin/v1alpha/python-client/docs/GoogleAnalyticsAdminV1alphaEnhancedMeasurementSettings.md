# GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings

Singleton resource under a web DataStream, configuring measurement of additional site interactions and content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_downloads_enabled** | **bool** | If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension. | [optional] 
**form_interactions_enabled** | **bool** | If enabled, capture a form interaction event each time a visitor interacts with a form on your website. False by default. | [optional] 
**name** | **str** | Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: \&quot;properties/1000/dataStreams/2000/enhancedMeasurementSettings\&quot; | [optional] [readonly] 
**outbound_clicks_enabled** | **bool** | If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain. | [optional] 
**page_changes_enabled** | **bool** | If enabled, capture a page view event each time the website changes the browser history state. | [optional] 
**scrolls_enabled** | **bool** | If enabled, capture scroll events each time a visitor gets to the bottom of a page. | [optional] 
**search_query_parameter** | **str** | Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty. | [optional] 
**site_search_enabled** | **bool** | If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter). | [optional] 
**stream_enabled** | **bool** | Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected. | [optional] 
**uri_query_parameter** | **str** | Additional URL query parameters. Max length is 1024 characters. | [optional] 
**video_engagement_enabled** | **bool** | If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_enhanced_measurement_settings import GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings from a JSON string
google_analytics_admin_v1alpha_enhanced_measurement_settings_instance = GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_enhanced_measurement_settings_dict = google_analytics_admin_v1alpha_enhanced_measurement_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings from a dict
google_analytics_admin_v1alpha_enhanced_measurement_settings_from_dict = GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings.from_dict(google_analytics_admin_v1alpha_enhanced_measurement_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


