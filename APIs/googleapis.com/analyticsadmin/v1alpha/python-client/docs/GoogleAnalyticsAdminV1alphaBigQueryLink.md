# GoogleAnalyticsAdminV1alphaBigQueryLink

A link between a GA4 Property and BigQuery project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the link was created. | [optional] [readonly] 
**daily_export_enabled** | **bool** | If set true, enables daily data export to the linked Google Cloud project. | [optional] 
**excluded_events** | **List[str]** | The list of event names that will be excluded from exports. | [optional] 
**export_streams** | **List[str]** | The list of streams under the parent property for which data will be exported. Format: properties/{property_id}/dataStreams/{stream_id} Example: [&#39;properties/1000/dataStreams/2000&#39;] | [optional] 
**fresh_daily_export_enabled** | **bool** | If set true, enables fresh daily export to the linked Google Cloud project. | [optional] 
**include_advertising_id** | **bool** | If set true, exported data will include advertising identifiers for mobile app streams. | [optional] 
**name** | **str** | Output only. Resource name of this BigQuery link. Format: &#39;properties/{property_id}/bigQueryLinks/{bigquery_link_id}&#39; Format: &#39;properties/1234/bigQueryLinks/abc567&#39; | [optional] [readonly] 
**project** | **str** | Immutable. The linked Google Cloud project. When creating a BigQueryLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, the returned project will always have a project that contains a project number. Format: &#39;projects/{project number}&#39; Example: &#39;projects/1234&#39; | [optional] 
**streaming_export_enabled** | **bool** | If set true, enables streaming export to the linked Google Cloud project. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_big_query_link import GoogleAnalyticsAdminV1alphaBigQueryLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBigQueryLink from a JSON string
google_analytics_admin_v1alpha_big_query_link_instance = GoogleAnalyticsAdminV1alphaBigQueryLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBigQueryLink.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_big_query_link_dict = google_analytics_admin_v1alpha_big_query_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBigQueryLink from a dict
google_analytics_admin_v1alpha_big_query_link_from_dict = GoogleAnalyticsAdminV1alphaBigQueryLink.from_dict(google_analytics_admin_v1alpha_big_query_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


