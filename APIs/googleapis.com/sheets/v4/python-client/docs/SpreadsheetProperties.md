# SpreadsheetProperties

Properties of a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_recalc** | **str** | The amount of time to wait before volatile functions are recalculated. | [optional] 
**default_format** | [**CellFormat**](CellFormat.md) |  | [optional] 
**iterative_calculation_settings** | [**IterativeCalculationSettings**](IterativeCalculationSettings.md) |  | [optional] 
**locale** | **str** | The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as &#x60;en&#x60; * an ISO 639-2 language code such as &#x60;fil&#x60;, if no 639-1 code exists * a combination of the ISO language code and country code, such as &#x60;en_US&#x60; Note: when updating this field, not all locales/languages are supported. | [optional] 
**spreadsheet_theme** | [**SpreadsheetTheme**](SpreadsheetTheme.md) |  | [optional] 
**time_zone** | **str** | The time zone of the spreadsheet, in CLDR format such as &#x60;America/New_York&#x60;. If the time zone isn&#39;t recognized, this may be a custom time zone such as &#x60;GMT-07:00&#x60;. | [optional] 
**title** | **str** | The title of the spreadsheet. | [optional] 

## Example

```python
from openapi_client.models.spreadsheet_properties import SpreadsheetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SpreadsheetProperties from a JSON string
spreadsheet_properties_instance = SpreadsheetProperties.from_json(json)
# print the JSON string representation of the object
print(SpreadsheetProperties.to_json())

# convert the object into a dict
spreadsheet_properties_dict = spreadsheet_properties_instance.to_dict()
# create an instance of SpreadsheetProperties from a dict
spreadsheet_properties_from_dict = SpreadsheetProperties.from_dict(spreadsheet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


