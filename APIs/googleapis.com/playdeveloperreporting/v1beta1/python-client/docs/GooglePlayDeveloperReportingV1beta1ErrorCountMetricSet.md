# GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet

Singleton resource representing the set of error report metrics. This metric set contains un-normalized error report counts. **Supported aggregation periods:** * HOURLY: metrics are aggregated in hourly intervals. The default and only supported timezone is `UTC`. * DAILY: metrics are aggregated in calendar date intervals. The default and only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `errorReportCount` (`google.type.Decimal`): Absolute count of individual error reports that have been received for an app. * `distinctUsers` (`google.type.Decimal`): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. **Required dimension:** This dimension must be always specified in all requests in the `dimensions` field in query requests. * `reportType` (string): the type of error. The value should correspond to one of the possible values in ErrorType. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceType` (string): identifier of the device's form factor, e.g., PHONE. * `issueId` (string): the id an error was assigned to. The value should correspond to the `{issue}` component of the issue name. * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., \"Exynos 2100\". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., \"Kryo 240\". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., \"4198400\". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., \"196610\". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app. **Related metric sets:** * vitals.errors.counts contains normalized metrics about Crashes, another stability metric. * vitals.errors.counts contains normalized metrics about ANRs, another stability metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freshness_info** | [**GooglePlayDeveloperReportingV1beta1FreshnessInfo**](GooglePlayDeveloperReportingV1beta1FreshnessInfo.md) |  | [optional] 
**name** | **str** | The resource name. Format: apps/{app}/errorCountMetricSet | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_error_count_metric_set import GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet from a JSON string
google_play_developer_reporting_v1beta1_error_count_metric_set_instance = GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_error_count_metric_set_dict = google_play_developer_reporting_v1beta1_error_count_metric_set_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet from a dict
google_play_developer_reporting_v1beta1_error_count_metric_set_from_dict = GooglePlayDeveloperReportingV1beta1ErrorCountMetricSet.from_dict(google_play_developer_reporting_v1beta1_error_count_metric_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


