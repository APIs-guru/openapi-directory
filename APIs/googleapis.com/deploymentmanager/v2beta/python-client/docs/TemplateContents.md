# TemplateContents

Files that make up the template contents of a template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imports** | [**List[ImportFile]**](ImportFile.md) | Import files referenced by the main template. | [optional] 
**interpreter** | **str** | Which interpreter (python or jinja) should be used during expansion. | [optional] 
**main_template** | **str** | The filename of the mainTemplate | [optional] 
**var_schema** | **str** | The contents of the template schema. | [optional] 
**template** | **str** | The contents of the main template file. | [optional] 

## Example

```python
from openapi_client.models.template_contents import TemplateContents

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateContents from a JSON string
template_contents_instance = TemplateContents.from_json(json)
# print the JSON string representation of the object
print(TemplateContents.to_json())

# convert the object into a dict
template_contents_dict = template_contents_instance.to_dict()
# create an instance of TemplateContents from a dict
template_contents_from_dict = TemplateContents.from_dict(template_contents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


