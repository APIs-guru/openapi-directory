# AutocompleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**AutocompleteResponseResult**](AutocompleteResponseResult.md) |  | 

## Example

```python
from openapi_client.models.autocomplete_response import AutocompleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AutocompleteResponse from a JSON string
autocomplete_response_instance = AutocompleteResponse.from_json(json)
# print the JSON string representation of the object
print(AutocompleteResponse.to_json())

# convert the object into a dict
autocomplete_response_dict = autocomplete_response_instance.to_dict()
# create an instance of AutocompleteResponse from a dict
autocomplete_response_from_dict = AutocompleteResponse.from_dict(autocomplete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


