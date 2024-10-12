# SuggestResult

One suggestion result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**people_suggestion** | [**PeopleSuggestion**](PeopleSuggestion.md) |  | [optional] 
**query_suggestion** | **object** | This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**suggested_query** | **str** | The suggested query that will be used for search, when the user clicks on the suggestion | [optional] 

## Example

```python
from openapi_client.models.suggest_result import SuggestResult

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestResult from a JSON string
suggest_result_instance = SuggestResult.from_json(json)
# print the JSON string representation of the object
print(SuggestResult.to_json())

# convert the object into a dict
suggest_result_dict = suggest_result_instance.to_dict()
# create an instance of SuggestResult from a dict
suggest_result_from_dict = SuggestResult.from_dict(suggest_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


