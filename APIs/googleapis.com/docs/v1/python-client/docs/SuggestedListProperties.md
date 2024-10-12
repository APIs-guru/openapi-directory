# SuggestedListProperties

A suggested change to ListProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_properties** | [**ListProperties**](ListProperties.md) |  | [optional] 
**list_properties_suggestion_state** | [**ListPropertiesSuggestionState**](ListPropertiesSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_list_properties import SuggestedListProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedListProperties from a JSON string
suggested_list_properties_instance = SuggestedListProperties.from_json(json)
# print the JSON string representation of the object
print(SuggestedListProperties.to_json())

# convert the object into a dict
suggested_list_properties_dict = suggested_list_properties_instance.to_dict()
# create an instance of SuggestedListProperties from a dict
suggested_list_properties_from_dict = SuggestedListProperties.from_dict(suggested_list_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


