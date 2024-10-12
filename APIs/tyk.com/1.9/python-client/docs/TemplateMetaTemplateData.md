# TemplateMetaTemplateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_session** | **bool** |  | [optional] 
**input_type** | **str** |  | [optional] 
**template_mode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_meta_template_data import TemplateMetaTemplateData

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateMetaTemplateData from a JSON string
template_meta_template_data_instance = TemplateMetaTemplateData.from_json(json)
# print the JSON string representation of the object
print(TemplateMetaTemplateData.to_json())

# convert the object into a dict
template_meta_template_data_dict = template_meta_template_data_instance.to_dict()
# create an instance of TemplateMetaTemplateData from a dict
template_meta_template_data_from_dict = TemplateMetaTemplateData.from_dict(template_meta_template_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


