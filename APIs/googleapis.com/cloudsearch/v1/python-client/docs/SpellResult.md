# SpellResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_query** | **str** | The suggested spelling of the query. | [optional] 
**suggested_query_html** | [**SafeHtmlProto**](SafeHtmlProto.md) |  | [optional] 
**suggestion_type** | **str** | Suggestion triggered for the current query. | [optional] 

## Example

```python
from openapi_client.models.spell_result import SpellResult

# TODO update the JSON string below
json = "{}"
# create an instance of SpellResult from a JSON string
spell_result_instance = SpellResult.from_json(json)
# print the JSON string representation of the object
print(SpellResult.to_json())

# convert the object into a dict
spell_result_dict = spell_result_instance.to_dict()
# create an instance of SpellResult from a dict
spell_result_from_dict = SpellResult.from_dict(spell_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


