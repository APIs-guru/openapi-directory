# EnumOption

EnumOption definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the option. | [optional] 
**id** | **str** | Id of the option. | [optional] 

## Example

```python
from openapi_client.models.enum_option import EnumOption

# TODO update the JSON string below
json = "{}"
# create an instance of EnumOption from a JSON string
enum_option_instance = EnumOption.from_json(json)
# print the JSON string representation of the object
print(EnumOption.to_json())

# convert the object into a dict
enum_option_dict = enum_option_instance.to_dict()
# create an instance of EnumOption from a dict
enum_option_from_dict = EnumOption.from_dict(enum_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


