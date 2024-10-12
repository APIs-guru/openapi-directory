# TextModuleData

Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. | [optional] 
**header** | **str** | The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. | [optional] 
**id** | **str** | The ID associated with a text module. This field is here to enable ease of management of text modules. | [optional] 
**localized_body** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_header** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_module_data import TextModuleData

# TODO update the JSON string below
json = "{}"
# create an instance of TextModuleData from a JSON string
text_module_data_instance = TextModuleData.from_json(json)
# print the JSON string representation of the object
print(TextModuleData.to_json())

# convert the object into a dict
text_module_data_dict = text_module_data_instance.to_dict()
# create an instance of TextModuleData from a dict
text_module_data_from_dict = TextModuleData.from_dict(text_module_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


