# InputTranslateString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | String containing the text to be translated | 
**language** | **str** | Translation language | 

## Example

```python
from openapi_client.models.input_translate_string import InputTranslateString

# TODO update the JSON string below
json = "{}"
# create an instance of InputTranslateString from a JSON string
input_translate_string_instance = InputTranslateString.from_json(json)
# print the JSON string representation of the object
print(InputTranslateString.to_json())

# convert the object into a dict
input_translate_string_dict = input_translate_string_instance.to_dict()
# create an instance of InputTranslateString from a dict
input_translate_string_from_dict = InputTranslateString.from_dict(input_translate_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


