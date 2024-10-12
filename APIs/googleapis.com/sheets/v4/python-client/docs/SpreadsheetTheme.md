# SpreadsheetTheme

Represents spreadsheet theme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_font_family** | **str** | Name of the primary font family. | [optional] 
**theme_colors** | [**List[ThemeColorPair]**](ThemeColorPair.md) | The spreadsheet theme color pairs. To update you must provide all theme color pairs. | [optional] 

## Example

```python
from openapi_client.models.spreadsheet_theme import SpreadsheetTheme

# TODO update the JSON string below
json = "{}"
# create an instance of SpreadsheetTheme from a JSON string
spreadsheet_theme_instance = SpreadsheetTheme.from_json(json)
# print the JSON string representation of the object
print(SpreadsheetTheme.to_json())

# convert the object into a dict
spreadsheet_theme_dict = spreadsheet_theme_instance.to_dict()
# create an instance of SpreadsheetTheme from a dict
spreadsheet_theme_from_dict = SpreadsheetTheme.from_dict(spreadsheet_theme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


