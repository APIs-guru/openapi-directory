# InputJoinStrings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[str]** | Collection of strings to be joined | 
**lower** | **str** | Convert strings in collection to lowercase | 
**separator** | **str** | Separator character | 
**trim** | **str** | Trim strings in collection | 

## Example

```python
from openapi_client.models.input_join_strings import InputJoinStrings

# TODO update the JSON string below
json = "{}"
# create an instance of InputJoinStrings from a JSON string
input_join_strings_instance = InputJoinStrings.from_json(json)
# print the JSON string representation of the object
print(InputJoinStrings.to_json())

# convert the object into a dict
input_join_strings_dict = input_join_strings_instance.to_dict()
# create an instance of InputJoinStrings from a dict
input_join_strings_from_dict = InputJoinStrings.from_dict(input_join_strings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


