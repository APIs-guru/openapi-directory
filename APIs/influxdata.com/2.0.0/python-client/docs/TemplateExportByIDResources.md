# TemplateExportByIDResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**kind** | [**TemplateKind**](TemplateKind.md) |  | 
**name** | **str** | if defined with id, name is used for resource exported by id. if defined independently, resources strictly matching name are exported | [optional] 

## Example

```python
from openapi_client.models.template_export_by_id_resources import TemplateExportByIDResources

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateExportByIDResources from a JSON string
template_export_by_id_resources_instance = TemplateExportByIDResources.from_json(json)
# print the JSON string representation of the object
print(TemplateExportByIDResources.to_json())

# convert the object into a dict
template_export_by_id_resources_dict = template_export_by_id_resources_instance.to_dict()
# create an instance of TemplateExportByIDResources from a dict
template_export_by_id_resources_from_dict = TemplateExportByIDResources.from_dict(template_export_by_id_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


