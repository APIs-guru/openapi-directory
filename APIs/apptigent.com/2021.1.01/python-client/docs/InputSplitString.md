# InputSplitString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characters** | **str** | One or more characters that will be used to split the text | 
**input** | **str** | Text to split | 

## Example

```python
from openapi_client.models.input_split_string import InputSplitString

# TODO update the JSON string below
json = "{}"
# create an instance of InputSplitString from a JSON string
input_split_string_instance = InputSplitString.from_json(json)
# print the JSON string representation of the object
print(InputSplitString.to_json())

# convert the object into a dict
input_split_string_dict = input_split_string_instance.to_dict()
# create an instance of InputSplitString from a dict
input_split_string_from_dict = InputSplitString.from_dict(input_split_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


