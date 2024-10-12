# StringHparamSearchSpace

Search space for string and enum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | **List[str]** | Canididates for the string or enum parameter in lower case. | [optional] 

## Example

```python
from openapi_client.models.string_hparam_search_space import StringHparamSearchSpace

# TODO update the JSON string below
json = "{}"
# create an instance of StringHparamSearchSpace from a JSON string
string_hparam_search_space_instance = StringHparamSearchSpace.from_json(json)
# print the JSON string representation of the object
print(StringHparamSearchSpace.to_json())

# convert the object into a dict
string_hparam_search_space_dict = string_hparam_search_space_instance.to_dict()
# create an instance of StringHparamSearchSpace from a dict
string_hparam_search_space_from_dict = StringHparamSearchSpace.from_dict(string_hparam_search_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


