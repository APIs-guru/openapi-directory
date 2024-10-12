# Spreadsheet

Resource that represents a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_schedules** | [**List[DataSourceRefreshSchedule]**](DataSourceRefreshSchedule.md) | Output only. A list of data source refresh schedules. | [optional] [readonly] 
**data_sources** | [**List[DataSource]**](DataSource.md) | A list of external data sources connected with the spreadsheet. | [optional] 
**developer_metadata** | [**List[DeveloperMetadata]**](DeveloperMetadata.md) | The developer metadata associated with a spreadsheet. | [optional] 
**named_ranges** | [**List[NamedRange]**](NamedRange.md) | The named ranges defined in a spreadsheet. | [optional] 
**properties** | [**SpreadsheetProperties**](SpreadsheetProperties.md) |  | [optional] 
**sheets** | [**List[Sheet]**](Sheet.md) | The sheets that are part of a spreadsheet. | [optional] 
**spreadsheet_id** | **str** | The ID of the spreadsheet. This field is read-only. | [optional] 
**spreadsheet_url** | **str** | The url of the spreadsheet. This field is read-only. | [optional] 

## Example

```python
from openapi_client.models.spreadsheet import Spreadsheet

# TODO update the JSON string below
json = "{}"
# create an instance of Spreadsheet from a JSON string
spreadsheet_instance = Spreadsheet.from_json(json)
# print the JSON string representation of the object
print(Spreadsheet.to_json())

# convert the object into a dict
spreadsheet_dict = spreadsheet_instance.to_dict()
# create an instance of Spreadsheet from a dict
spreadsheet_from_dict = Spreadsheet.from_dict(spreadsheet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


