# GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval

Represents the confidence interval of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_bound** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 
**upper_bound** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_decimal_confidence_interval import GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval from a JSON string
google_play_developer_reporting_v1beta1_decimal_confidence_interval_instance = GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_decimal_confidence_interval_dict = google_play_developer_reporting_v1beta1_decimal_confidence_interval_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval from a dict
google_play_developer_reporting_v1beta1_decimal_confidence_interval_from_dict = GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval.from_dict(google_play_developer_reporting_v1beta1_decimal_confidence_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


