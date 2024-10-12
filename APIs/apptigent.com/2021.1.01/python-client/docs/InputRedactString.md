# InputRedactString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | **str** | Regular expression pattern for matching strings | [optional] 
**source** | **str** | String containing the complete text | 
**value** | **str** | Individual string to redact | [optional] 
**values** | **List[str]** | Collection of strings to redact | [optional] 

## Example

```python
from openapi_client.models.input_redact_string import InputRedactString

# TODO update the JSON string below
json = "{}"
# create an instance of InputRedactString from a JSON string
input_redact_string_instance = InputRedactString.from_json(json)
# print the JSON string representation of the object
print(InputRedactString.to_json())

# convert the object into a dict
input_redact_string_dict = input_redact_string_instance.to_dict()
# create an instance of InputRedactString from a dict
input_redact_string_from_dict = InputRedactString.from_dict(input_redact_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


