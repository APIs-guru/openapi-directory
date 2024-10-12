# InputReplaceString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacement** | **str** | Replacement text | 
**source** | **str** | String containing the text to be replaced | 
**value** | **str** | Text to replace | 

## Example

```python
from openapi_client.models.input_replace_string import InputReplaceString

# TODO update the JSON string below
json = "{}"
# create an instance of InputReplaceString from a JSON string
input_replace_string_instance = InputReplaceString.from_json(json)
# print the JSON string representation of the object
print(InputReplaceString.to_json())

# convert the object into a dict
input_replace_string_dict = input_replace_string_instance.to_dict()
# create an instance of InputReplaceString from a dict
input_replace_string_from_dict = InputReplaceString.from_dict(input_replace_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


