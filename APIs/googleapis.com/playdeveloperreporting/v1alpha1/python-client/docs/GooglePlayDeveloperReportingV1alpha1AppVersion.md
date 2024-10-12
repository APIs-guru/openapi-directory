# GooglePlayDeveloperReportingV1alpha1AppVersion

Representations of an app version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_code** | **str** | Numeric version code of the app version (set by the app&#39;s developer). | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_app_version import GooglePlayDeveloperReportingV1alpha1AppVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1AppVersion from a JSON string
google_play_developer_reporting_v1alpha1_app_version_instance = GooglePlayDeveloperReportingV1alpha1AppVersion.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1AppVersion.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_app_version_dict = google_play_developer_reporting_v1alpha1_app_version_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1AppVersion from a dict
google_play_developer_reporting_v1alpha1_app_version_from_dict = GooglePlayDeveloperReportingV1alpha1AppVersion.from_dict(google_play_developer_reporting_v1alpha1_app_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


