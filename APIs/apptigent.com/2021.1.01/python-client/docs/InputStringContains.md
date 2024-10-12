# InputStringContains


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**find** | **str** | Text to match | 
**input** | **str** | Text to search | 
**lower** | **str** | Convert strings to lowercase | 

## Example

```python
from openapi_client.models.input_string_contains import InputStringContains

# TODO update the JSON string below
json = "{}"
# create an instance of InputStringContains from a JSON string
input_string_contains_instance = InputStringContains.from_json(json)
# print the JSON string representation of the object
print(InputStringContains.to_json())

# convert the object into a dict
input_string_contains_dict = input_string_contains_instance.to_dict()
# create an instance of InputStringContains from a dict
input_string_contains_from_dict = InputStringContains.from_dict(input_string_contains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


