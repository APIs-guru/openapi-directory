# LinkedContentReferenceSuggestionState

A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheets_chart_reference_suggestion_state** | [**SheetsChartReferenceSuggestionState**](SheetsChartReferenceSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_content_reference_suggestion_state import LinkedContentReferenceSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedContentReferenceSuggestionState from a JSON string
linked_content_reference_suggestion_state_instance = LinkedContentReferenceSuggestionState.from_json(json)
# print the JSON string representation of the object
print(LinkedContentReferenceSuggestionState.to_json())

# convert the object into a dict
linked_content_reference_suggestion_state_dict = linked_content_reference_suggestion_state_instance.to_dict()
# create an instance of LinkedContentReferenceSuggestionState from a dict
linked_content_reference_suggestion_state_from_dict = LinkedContentReferenceSuggestionState.from_dict(linked_content_reference_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


