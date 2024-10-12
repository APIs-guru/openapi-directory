# GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest

Request message for QueryErrorCountMetricSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | Dimensions to slice the data by. **Supported dimensions:** * &#x60;apiLevel&#x60; (string): the API level of Android that was running on the user&#39;s device, e.g., 26. * &#x60;versionCode&#x60; (int64): unique identifier of the user&#39;s device model. The form of the identifier is &#39;deviceBrand/device&#39;, where deviceBrand corresponds to Build.BRAND and device corresponds to Build.DEVICE, e.g., google/coral. * &#x60;deviceModel&#x60; (string): unique identifier of the user&#39;s device model. * &#x60;deviceType&#x60; (string): identifier of the device&#39;s form factor, e.g., PHONE. * &#x60;reportType&#x60; (string): the type of error. The value should correspond to one of the possible values in ErrorType. * &#x60;isUserPerceived&#x60; (string): denotes whether error is user perceived or not, USER_PERCEIVED or NOT_USER_PERCEIVED. * &#x60;issueId&#x60; (string): the id an error was assigned to. The value should correspond to the &#x60;{issue}&#x60; component of the issue name. * &#x60;deviceRamBucket&#x60; (int64): RAM of the device, in MB, in buckets (3GB, 4GB, etc.). * &#x60;deviceSocMake&#x60; (string): Make of the device&#39;s primary system-on-chip, e.g., Samsung. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MANUFACTURER) * &#x60;deviceSocModel&#x60; (string): Model of the device&#39;s primary system-on-chip, e.g., \&quot;Exynos 2100\&quot;. [Reference](https://developer.android.com/reference/android/os/Build#SOC_MODEL) * &#x60;deviceCpuMake&#x60; (string): Make of the device&#39;s CPU, e.g., Qualcomm. * &#x60;deviceCpuModel&#x60; (string): Model of the device&#39;s CPU, e.g., \&quot;Kryo 240\&quot;. * &#x60;deviceGpuMake&#x60; (string): Make of the device&#39;s GPU, e.g., ARM. * &#x60;deviceGpuModel&#x60; (string): Model of the device&#39;s GPU, e.g., Mali. * &#x60;deviceGpuVersion&#x60; (string): Version of the device&#39;s GPU, e.g., T750. * &#x60;deviceVulkanVersion&#x60; (string): Vulkan version of the device, e.g., \&quot;4198400\&quot;. * &#x60;deviceGlEsVersion&#x60; (string): OpenGL ES version of the device, e.g., \&quot;196610\&quot;. * &#x60;deviceScreenSize&#x60; (string): Screen size of the device, e.g., NORMAL, LARGE. * &#x60;deviceScreenDpi&#x60; (string): Screen density of the device, e.g., mdpi, hdpi. | [optional] 
**filter** | **str** | Filters to apply to data. The filtering expression follows [AIP-160](https://google.aip.dev/160) standard and supports filtering by equality of all breakdown dimensions. | [optional] 
**metrics** | **List[str]** | Metrics to aggregate. **Supported metrics:** * &#x60;errorReportCount&#x60; (&#x60;google.type.Decimal&#x60;): Absolute count of individual error reports that have been received for an app. * &#x60;distinctUsers&#x60; (&#x60;google.type.Decimal&#x60;): Count of distinct users for which reports have been received. Care must be taken not to aggregate this count further, as it may result in users being counted multiple times. This value is not rounded, however it may be an approximation. | [optional] 
**page_size** | **int** | Maximum size of the returned data. If unspecified, at most 1000 rows will be returned. The maximum value is 100000; values above 100000 will be coerced to 100000. | [optional] 
**page_token** | **str** | A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. | [optional] 
**timeline_spec** | [**GooglePlayDeveloperReportingV1beta1TimelineSpec**](GooglePlayDeveloperReportingV1beta1TimelineSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_query_error_count_metric_set_request import GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest from a JSON string
google_play_developer_reporting_v1beta1_query_error_count_metric_set_request_instance = GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_query_error_count_metric_set_request_dict = google_play_developer_reporting_v1beta1_query_error_count_metric_set_request_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest from a dict
google_play_developer_reporting_v1beta1_query_error_count_metric_set_request_from_dict = GooglePlayDeveloperReportingV1beta1QueryErrorCountMetricSetRequest.from_dict(google_play_developer_reporting_v1beta1_query_error_count_metric_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


