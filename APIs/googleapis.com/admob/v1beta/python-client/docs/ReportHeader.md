# ReportHeader

Groups data helps to treat the generated report. Always sent as a first message in the stream response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**localization_settings** | [**LocalizationSettings**](LocalizationSettings.md) |  | [optional] 
**reporting_time_zone** | **str** | The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, \&quot;America/Los_Angeles\&quot;. | [optional] 

## Example

```python
from openapi_client.models.report_header import ReportHeader

# TODO update the JSON string below
json = "{}"
# create an instance of ReportHeader from a JSON string
report_header_instance = ReportHeader.from_json(json)
# print the JSON string representation of the object
print(ReportHeader.to_json())

# convert the object into a dict
report_header_dict = report_header_instance.to_dict()
# create an instance of ReportHeader from a dict
report_header_from_dict = ReportHeader.from_dict(report_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


