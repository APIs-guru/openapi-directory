# FindReplaceRequest

Finds and replaces data in cells over a range, sheet, or all sheets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_sheets** | **bool** | True to find/replace over all sheets. | [optional] 
**find** | **str** | The value to search. | [optional] 
**include_formulas** | **bool** | True if the search should include cells with formulas. False to skip cells with formulas. | [optional] 
**match_case** | **bool** | True if the search is case sensitive. | [optional] 
**match_entire_cell** | **bool** | True if the find value should match the entire cell. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**replacement** | **str** | The value to use as the replacement. | [optional] 
**search_by_regex** | **bool** | True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents &#x60;\&quot;Google Sheets\&quot;&#x60; and another has &#x60;\&quot;Google Docs\&quot;&#x60;, then searching for &#x60;\&quot;o.* (.*)\&quot;&#x60; with a replacement of &#x60;\&quot;$1 Rocks\&quot;&#x60; would change the contents of the cells to &#x60;\&quot;GSheets Rocks\&quot;&#x60; and &#x60;\&quot;GDocs Rocks\&quot;&#x60; respectively. | [optional] 
**sheet_id** | **int** | The sheet to find/replace over. | [optional] 

## Example

```python
from openapi_client.models.find_replace_request import FindReplaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindReplaceRequest from a JSON string
find_replace_request_instance = FindReplaceRequest.from_json(json)
# print the JSON string representation of the object
print(FindReplaceRequest.to_json())

# convert the object into a dict
find_replace_request_dict = find_replace_request_instance.to_dict()
# create an instance of FindReplaceRequest from a dict
find_replace_request_from_dict = FindReplaceRequest.from_dict(find_replace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


