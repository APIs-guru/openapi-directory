# AliasContext

An alias to a repo revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The alias kind. | [optional] 
**name** | **str** | The alias name. | [optional] 

## Example

```python
from openapi_client.models.alias_context import AliasContext

# TODO update the JSON string below
json = "{}"
# create an instance of AliasContext from a JSON string
alias_context_instance = AliasContext.from_json(json)
# print the JSON string representation of the object
print(AliasContext.to_json())

# convert the object into a dict
alias_context_dict = alias_context_instance.to_dict()
# create an instance of AliasContext from a dict
alias_context_from_dict = AliasContext.from_dict(alias_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


