# InputTrimString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | String containing the text to be trimmed | 
**type** | **str** | Type of white space to remove | 

## Example

```python
from openapi_client.models.input_trim_string import InputTrimString

# TODO update the JSON string below
json = "{}"
# create an instance of InputTrimString from a JSON string
input_trim_string_instance = InputTrimString.from_json(json)
# print the JSON string representation of the object
print(InputTrimString.to_json())

# convert the object into a dict
input_trim_string_dict = input_trim_string_instance.to_dict()
# create an instance of InputTrimString from a dict
input_trim_string_from_dict = InputTrimString.from_dict(input_trim_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


