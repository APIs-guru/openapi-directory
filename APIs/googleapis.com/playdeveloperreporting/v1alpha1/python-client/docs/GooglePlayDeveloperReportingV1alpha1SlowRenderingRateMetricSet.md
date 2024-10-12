# GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet

Singleton resource representing the set of Slow Rendering metrics. This metric set contains low-level rendering data captured by SurafeFlinger. Sessions are evaluated based on the present-to-present histogram of frames handled by any SurfaceFlinger layer owned by the app. A slow session is a session where more than 25% of frames for the session did not meet the metric's target frame rate (either 20fps, or 30fps). *NOTE:* This metric set is only available for games. **Supported aggregation periods:** * DAILY: metrics are aggregated in calendar date intervals. Due to historical constraints, the only supported timezone is `America/Los_Angeles`. **Supported metrics:** * `slowRenderingRate20Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate20Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate20Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate20Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps` (`google.type.Decimal`): Percentage of distinct users in the aggregation period that had slow rendering. * `slowRenderingRate30Fps7dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 7 days. The daily values are weighted by the count of distinct users for the day. * `slowRenderingRate30Fps28dUserWeighted` (`google.type.Decimal`): Rolling average value of `slowRenderingRate30Fps` in the last 28 days. The daily values are weighted by the count of distinct users for the day. * `distinctUsers` (`google.type.Decimal`): Count of distinct users in the aggregation period that were used as normalization value for the `slowRenderingRate20Fps`/`slowRenderingRate30Fps` metric. A user is counted in this metric if their app rendered any frames. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. **Supported dimensions:** * `apiLevel` (string): the API level of Android that was running on the user's device, e.g., 26. * `versionCode` (int64): version of the app that was running on the user's device. * `deviceModel` (string): unique identifier of the user's device model. The form of the identifier is 'deviceBrand/device', where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * `deviceBrand` (string): unique identifier of the user's device brand, e.g., google. * `deviceType` (string): the type (also known as form factor) of the user's device, e.g., PHONE. * `countryCode` (string): the country or region of the user's device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * `deviceRamBucket` (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * `deviceSocMake` (string): Make of the device's primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * `deviceSocModel` (string): Model of the device's primary system-on-chip, e.g., \"Exynos 2100\". [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * `deviceCpuMake` (string): Make of the device's CPU, e.g., Qualcomm. * `deviceCpuModel` (string): Model of the device's CPU, e.g., \"Kryo 240\". * `deviceGpuMake` (string): Make of the device's GPU, e.g., ARM. * `deviceGpuModel` (string): Model of the device's GPU, e.g., Mali. * `deviceGpuVersion` (string): Version of the device's GPU, e.g., T750. * `deviceVulkanVersion` (string): Vulkan version of the device, e.g., \"4198400\". * `deviceGlEsVersion` (string): OpenGL ES version of the device, e.g., \"196610\". * `deviceScreenSize` (string): Screen size of the device, e.g., NORMAL, LARGE. * `deviceScreenDpi` (string): Screen density of the device, e.g., mdpi, hdpi. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freshness_info** | [**GooglePlayDeveloperReportingV1alpha1FreshnessInfo**](GooglePlayDeveloperReportingV1alpha1FreshnessInfo.md) |  | [optional] 
**name** | **str** | Identifier. The resource name. Format: apps/{app}/slowRenderingRateMetricSet | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set import GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet from a JSON string
google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set_instance = GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set_dict = google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet from a dict
google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set_from_dict = GooglePlayDeveloperReportingV1alpha1SlowRenderingRateMetricSet.from_dict(google_play_developer_reporting_v1alpha1_slow_rendering_rate_metric_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


