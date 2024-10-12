# GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness

Information about data freshness for a single aggregation period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_period** | **str** | Aggregation period for which data is available. | [optional] 
**latest_end_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_freshness_info_freshness import GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness from a JSON string
google_play_developer_reporting_v1alpha1_freshness_info_freshness_instance = GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_freshness_info_freshness_dict = google_play_developer_reporting_v1alpha1_freshness_info_freshness_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness from a dict
google_play_developer_reporting_v1alpha1_freshness_info_freshness_from_dict = GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness.from_dict(google_play_developer_reporting_v1alpha1_freshness_info_freshness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


