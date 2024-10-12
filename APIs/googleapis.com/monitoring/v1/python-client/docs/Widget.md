# Widget

Widget contains a single dashboard component and configuration of how to present the component in the dashboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_chart** | [**AlertChart**](AlertChart.md) |  | [optional] 
**blank** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  | [optional] 
**collapsible_group** | [**CollapsibleGroup**](CollapsibleGroup.md) |  | [optional] 
**error_reporting_panel** | [**ErrorReportingPanel**](ErrorReportingPanel.md) |  | [optional] 
**id** | **str** | Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. | [optional] 
**incident_list** | [**IncidentList**](IncidentList.md) |  | [optional] 
**logs_panel** | [**LogsPanel**](LogsPanel.md) |  | [optional] 
**pie_chart** | [**PieChart**](PieChart.md) |  | [optional] 
**scorecard** | [**Scorecard**](Scorecard.md) |  | [optional] 
**section_header** | [**SectionHeader**](SectionHeader.md) |  | [optional] 
**single_view_group** | **object** | A widget that groups the other widgets by using a dropdown menu. All widgets that are within the area spanned by the grouping widget are considered member widgets. | [optional] 
**text** | [**Text**](Text.md) |  | [optional] 
**time_series_table** | [**TimeSeriesTable**](TimeSeriesTable.md) |  | [optional] 
**title** | **str** | Optional. The title of the widget. | [optional] 
**xy_chart** | [**XyChart**](XyChart.md) |  | [optional] 

## Example

```python
from openapi_client.models.widget import Widget

# TODO update the JSON string below
json = "{}"
# create an instance of Widget from a JSON string
widget_instance = Widget.from_json(json)
# print the JSON string representation of the object
print(Widget.to_json())

# convert the object into a dict
widget_dict = widget_instance.to_dict()
# create an instance of Widget from a dict
widget_from_dict = Widget.from_dict(widget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


