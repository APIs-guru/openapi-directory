# BulletSuggestionState

A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id_suggested** | **bool** | Indicates if there was a suggested change to the list_id. | [optional] 
**nesting_level_suggested** | **bool** | Indicates if there was a suggested change to the nesting_level. | [optional] 
**text_style_suggestion_state** | [**TextStyleSuggestionState**](TextStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.bullet_suggestion_state import BulletSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of BulletSuggestionState from a JSON string
bullet_suggestion_state_instance = BulletSuggestionState.from_json(json)
# print the JSON string representation of the object
print(BulletSuggestionState.to_json())

# convert the object into a dict
bullet_suggestion_state_dict = bullet_suggestion_state_instance.to_dict()
# create an instance of BulletSuggestionState from a dict
bullet_suggestion_state_from_dict = BulletSuggestionState.from_dict(bullet_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


