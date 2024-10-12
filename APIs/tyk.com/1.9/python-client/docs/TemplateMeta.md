# TemplateMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**template_data** | [**TemplateMetaTemplateData**](TemplateMetaTemplateData.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_meta import TemplateMeta

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateMeta from a JSON string
template_meta_instance = TemplateMeta.from_json(json)
# print the JSON string representation of the object
print(TemplateMeta.to_json())

# convert the object into a dict
template_meta_dict = template_meta_instance.to_dict()
# create an instance of TemplateMeta from a dict
template_meta_from_dict = TemplateMeta.from_dict(template_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


