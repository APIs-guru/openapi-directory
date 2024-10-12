# GoogleChecksReportV1alphaAppBundle

Information about the analyzed app bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | Unique id of the bundle. For example: \&quot;com.google.Gmail\&quot;. | [optional] 
**code_reference_id** | **str** | Git commit hash or changelist number associated with the release. | [optional] 
**release_type** | **str** | Identifies the type of release. | [optional] 
**version** | **str** | The user-visible version of the bundle such as the Android &#x60;versionName&#x60; or iOS &#x60;CFBundleShortVersionString&#x60;. For example: \&quot;7.21.1\&quot;. | [optional] 
**version_id** | **str** | The version used throughout the operating system and store to identify the build such as the Android &#x60;versionCode&#x60; or iOS &#x60;CFBundleVersion&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_app_bundle import GoogleChecksReportV1alphaAppBundle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaAppBundle from a JSON string
google_checks_report_v1alpha_app_bundle_instance = GoogleChecksReportV1alphaAppBundle.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaAppBundle.to_json())

# convert the object into a dict
google_checks_report_v1alpha_app_bundle_dict = google_checks_report_v1alpha_app_bundle_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaAppBundle from a dict
google_checks_report_v1alpha_app_bundle_from_dict = GoogleChecksReportV1alphaAppBundle.from_dict(google_checks_report_v1alpha_app_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


