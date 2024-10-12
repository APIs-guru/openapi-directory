# GoogleCloudChannelV1ReportValue

A single report value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time_value** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 
**date_value** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**decimal_value** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 
**int_value** | **str** | A value of type &#x60;int&#x60;. | [optional] 
**money_value** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**string_value** | **str** | A value of type &#x60;string&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_report_value import GoogleCloudChannelV1ReportValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ReportValue from a JSON string
google_cloud_channel_v1_report_value_instance = GoogleCloudChannelV1ReportValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ReportValue.to_json())

# convert the object into a dict
google_cloud_channel_v1_report_value_dict = google_cloud_channel_v1_report_value_instance.to_dict()
# create an instance of GoogleCloudChannelV1ReportValue from a dict
google_cloud_channel_v1_report_value_from_dict = GoogleCloudChannelV1ReportValue.from_dict(google_cloud_channel_v1_report_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


