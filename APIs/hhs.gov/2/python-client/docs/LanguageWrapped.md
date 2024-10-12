# LanguageWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Language]**](Language.md) |  | [optional] 

## Example

```python
from openapi_client.models.language_wrapped import LanguageWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageWrapped from a JSON string
language_wrapped_instance = LanguageWrapped.from_json(json)
# print the JSON string representation of the object
print(LanguageWrapped.to_json())

# convert the object into a dict
language_wrapped_dict = language_wrapped_instance.to_dict()
# create an instance of LanguageWrapped from a dict
language_wrapped_from_dict = LanguageWrapped.from_dict(language_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


