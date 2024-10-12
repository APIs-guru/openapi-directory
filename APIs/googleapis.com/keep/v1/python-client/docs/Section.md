# Section

The content of the note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**ListContent**](ListContent.md) |  | [optional] 
**text** | [**TextContent**](TextContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.section import Section

# TODO update the JSON string below
json = "{}"
# create an instance of Section from a JSON string
section_instance = Section.from_json(json)
# print the JSON string representation of the object
print(Section.to_json())

# convert the object into a dict
section_dict = section_instance.to_dict()
# create an instance of Section from a dict
section_from_dict = Section.from_dict(section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


