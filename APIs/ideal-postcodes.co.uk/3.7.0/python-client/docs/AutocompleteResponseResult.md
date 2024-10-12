# AutocompleteResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**List[AutocompleteResponseResultHitsInner]**](AutocompleteResponseResultHitsInner.md) |  | 

## Example

```python
from openapi_client.models.autocomplete_response_result import AutocompleteResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of AutocompleteResponseResult from a JSON string
autocomplete_response_result_instance = AutocompleteResponseResult.from_json(json)
# print the JSON string representation of the object
print(AutocompleteResponseResult.to_json())

# convert the object into a dict
autocomplete_response_result_dict = autocomplete_response_result_instance.to_dict()
# create an instance of AutocompleteResponseResult from a dict
autocomplete_response_result_from_dict = AutocompleteResponseResult.from_dict(autocomplete_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


