# GooglePlayDeveloperReportingV1beta1DimensionValue

Represents the value of a single dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Name of the dimension. | [optional] 
**int64_value** | **str** | Actual value, represented as an int64. | [optional] 
**string_value** | **str** | Actual value, represented as a string. | [optional] 
**value_label** | **str** | Optional. Human-friendly label for the value, always in English. For example, &#39;Spain&#39; for the &#39;ES&#39; country code. Whereas the dimension value is stable, this value label is subject to change. Do not assume that the (value, value_label) relationship is stable. For example, the ISO country code &#39;MK&#39; changed its name recently to &#39;North Macedonia&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_dimension_value import GooglePlayDeveloperReportingV1beta1DimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1DimensionValue from a JSON string
google_play_developer_reporting_v1beta1_dimension_value_instance = GooglePlayDeveloperReportingV1beta1DimensionValue.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1DimensionValue.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_dimension_value_dict = google_play_developer_reporting_v1beta1_dimension_value_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1DimensionValue from a dict
google_play_developer_reporting_v1beta1_dimension_value_from_dict = GooglePlayDeveloperReportingV1beta1DimensionValue.from_dict(google_play_developer_reporting_v1beta1_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


