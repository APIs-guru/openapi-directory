# GoogleSheetsOptions

Options specific to Google Sheets data sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **str** | Optional. Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20 | [optional] 
**skip_leading_rows** | **str** | Optional. The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows &#x3D; N &gt; 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. | [optional] 

## Example

```python
from openapi_client.models.google_sheets_options import GoogleSheetsOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSheetsOptions from a JSON string
google_sheets_options_instance = GoogleSheetsOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleSheetsOptions.to_json())

# convert the object into a dict
google_sheets_options_dict = google_sheets_options_instance.to_dict()
# create an instance of GoogleSheetsOptions from a dict
google_sheets_options_from_dict = GoogleSheetsOptions.from_dict(google_sheets_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


