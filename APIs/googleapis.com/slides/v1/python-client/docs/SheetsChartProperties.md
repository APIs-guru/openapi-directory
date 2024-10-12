# SheetsChartProperties

The properties of the SheetsChart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_image_properties** | [**ImageProperties**](ImageProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.sheets_chart_properties import SheetsChartProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SheetsChartProperties from a JSON string
sheets_chart_properties_instance = SheetsChartProperties.from_json(json)
# print the JSON string representation of the object
print(SheetsChartProperties.to_json())

# convert the object into a dict
sheets_chart_properties_dict = sheets_chart_properties_instance.to_dict()
# create an instance of SheetsChartProperties from a dict
sheets_chart_properties_from_dict = SheetsChartProperties.from_dict(sheets_chart_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


