# TemplateWrapper

A list of Templates. Template names are case-sensitive. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** |  | [optional] 
**default_version** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**specification** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_wrapper import TemplateWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateWrapper from a JSON string
template_wrapper_instance = TemplateWrapper.from_json(json)
# print the JSON string representation of the object
print(TemplateWrapper.to_json())

# convert the object into a dict
template_wrapper_dict = template_wrapper_instance.to_dict()
# create an instance of TemplateWrapper from a dict
template_wrapper_from_dict = TemplateWrapper.from_dict(template_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


