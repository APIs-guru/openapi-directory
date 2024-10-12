# GooglePlayDeveloperReportingV1beta1FreshnessInfo

Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freshnesses** | [**List[GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness]**](GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness.md) | Information about data freshness for every supported aggregation period. This field has set semantics, keyed by the &#x60;aggregation_period&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_freshness_info import GooglePlayDeveloperReportingV1beta1FreshnessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1FreshnessInfo from a JSON string
google_play_developer_reporting_v1beta1_freshness_info_instance = GooglePlayDeveloperReportingV1beta1FreshnessInfo.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1FreshnessInfo.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_freshness_info_dict = google_play_developer_reporting_v1beta1_freshness_info_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1FreshnessInfo from a dict
google_play_developer_reporting_v1beta1_freshness_info_from_dict = GooglePlayDeveloperReportingV1beta1FreshnessInfo.from_dict(google_play_developer_reporting_v1beta1_freshness_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


