# GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions

A set of filtering options for releases and version codes specific to an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracks** | [**List[GooglePlayDeveloperReportingV1beta1Track]**](GooglePlayDeveloperReportingV1beta1Track.md) | List of tracks to filter releases over. Provides the grouping of version codes under releases and tracks. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_release_filter_options import GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions from a JSON string
google_play_developer_reporting_v1beta1_release_filter_options_instance = GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_release_filter_options_dict = google_play_developer_reporting_v1beta1_release_filter_options_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions from a dict
google_play_developer_reporting_v1beta1_release_filter_options_from_dict = GooglePlayDeveloperReportingV1beta1ReleaseFilterOptions.from_dict(google_play_developer_reporting_v1beta1_release_filter_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


