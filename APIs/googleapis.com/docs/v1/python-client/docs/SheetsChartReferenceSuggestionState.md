# SheetsChartReferenceSuggestionState

A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id_suggested** | **bool** | Indicates if there was a suggested change to chart_id. | [optional] 
**spreadsheet_id_suggested** | **bool** | Indicates if there was a suggested change to spreadsheet_id. | [optional] 

## Example

```python
from openapi_client.models.sheets_chart_reference_suggestion_state import SheetsChartReferenceSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of SheetsChartReferenceSuggestionState from a JSON string
sheets_chart_reference_suggestion_state_instance = SheetsChartReferenceSuggestionState.from_json(json)
# print the JSON string representation of the object
print(SheetsChartReferenceSuggestionState.to_json())

# convert the object into a dict
sheets_chart_reference_suggestion_state_dict = sheets_chart_reference_suggestion_state_instance.to_dict()
# create an instance of SheetsChartReferenceSuggestionState from a dict
sheets_chart_reference_suggestion_state_from_dict = SheetsChartReferenceSuggestionState.from_dict(sheets_chart_reference_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


