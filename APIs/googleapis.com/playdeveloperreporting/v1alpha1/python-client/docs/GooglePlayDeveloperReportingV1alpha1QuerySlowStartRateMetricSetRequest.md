# GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest

Request message for QuerySlowStartRateMetricSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | Dimensions to slice the data by. **Supported dimensions:** * &#x60;apiLevel&#x60; (string): the API level of Android that was running on the user&#39;s device, e.g., 26. * &#x60;versionCode&#x60; (int64): version of the app that was running on the user&#39;s device. * &#x60;deviceModel&#x60; (string): unique identifier of the user&#39;s device model. The form of the identifier is &#39;deviceBrand/device&#39;, where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * &#x60;deviceBrand&#x60; (string): unique identifier of the user&#39;s device brand, e.g., google. * &#x60;deviceType&#x60; (string): the type (also known as form factor) of the user&#39;s device, e.g., PHONE. * &#x60;countryCode&#x60; (string): the country or region of the user&#39;s device based on their IP address, represented as a 2-letter ISO-3166 code (e.g. US for the United States). * &#x60;deviceRamBucket&#x60; (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * &#x60;deviceSocMake&#x60; (string): Make of the device&#39;s primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * &#x60;deviceSocModel&#x60; (string): Model of the device&#39;s primary system-on-chip, e.g., \&quot;Exynos 2100\&quot;. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * &#x60;deviceCpuMake&#x60; (string): Make of the device&#39;s CPU, e.g., Qualcomm. * &#x60;deviceCpuModel&#x60; (string): Model of the device&#39;s CPU, e.g., \&quot;Kryo 240\&quot;. * &#x60;deviceGpuMake&#x60; (string): Make of the device&#39;s GPU, e.g., ARM. * &#x60;deviceGpuModel&#x60; (string): Model of the device&#39;s GPU, e.g., Mali. * &#x60;deviceGpuVersion&#x60; (string): Version of the device&#39;s GPU, e.g., T750. * &#x60;deviceVulkanVersion&#x60; (string): Vulkan version of the device, e.g., \&quot;4198400\&quot;. * &#x60;deviceGlEsVersion&#x60; (string): OpenGL ES version of the device, e.g., \&quot;196610\&quot;. * &#x60;deviceScreenSize&#x60; (string): Screen size of the device, e.g., NORMAL, LARGE. * &#x60;deviceScreenDpi&#x60; (string): Screen density of the device, e.g., mdpi, hdpi. | [optional] 
**filter** | **str** | Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. | [optional] 
**metrics** | **List[str]** | Metrics to aggregate. **Supported metrics:** * &#x60;slowStartRate&#x60; (&#x60;google.type.Decimal&#x60;): Percentage of distinct users in the aggregation period that had a slow start. * &#x60;slowStartRate7dUserWeighted&#x60; (&#x60;google.type.Decimal&#x60;): Rolling average value of &#x60;slowStartRate&#x60; in the last 7 days. The daily values are weighted by the count of distinct users for the day. * &#x60;slowStartRate28dUserWeighted&#x60; (&#x60;google.type.Decimal&#x60;): Rolling average value of &#x60;slowStartRate&#x60; in the last 28 days. The daily values are weighted by the count of distinct users for the day. * &#x60;distinctUsers&#x60; (&#x60;google.type.Decimal&#x60;): Count of distinct users in the aggregation period that were used as normalization value for the &#x60;slowStartRate&#x60; metric. A user is counted in this metric if their app was launched in the device. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. The value is rounded to the nearest multiple of 10, 100, 1,000 or 1,000,000, depending on the magnitude of the value. | [optional] 
**page_size** | **int** | Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. | [optional] 
**page_token** | **str** | A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. | [optional] 
**timeline_spec** | [**GooglePlayDeveloperReportingV1alpha1TimelineSpec**](GooglePlayDeveloperReportingV1alpha1TimelineSpec.md) |  | [optional] 
**user_cohort** | **str** | User view to select. The output data will correspond to the selected view. **Supported values:** * &#x60;OS_PUBLIC&#x60; To select data from all publicly released Android versions. This is the default. Supports all the above dimensions. * &#x60;APP_TESTERS&#x60; To select data from users who have opted in to be testers. Supports all the above dimensions. * &#x60;OS_BETA&#x60; To select data from beta Android versions only, excluding data from released Android versions. Only the following dimensions are supported: * &#x60;versionCode&#x60; (int64): version of the app that was running on the user&#39;s device. * &#x60;osBuild&#x60; (string): OS build of the user&#39;s device, e.g., \&quot;T1B2.220916.004\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request import GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest from a JSON string
google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request_instance = GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request_dict = google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest from a dict
google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request_from_dict = GooglePlayDeveloperReportingV1alpha1QuerySlowStartRateMetricSetRequest.from_dict(google_play_developer_reporting_v1alpha1_query_slow_start_rate_metric_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


