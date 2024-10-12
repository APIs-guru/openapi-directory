# TemplateExportByName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_ids** | [**List[TemplateExportByIDOrgIDsInner]**](TemplateExportByIDOrgIDsInner.md) |  | [optional] 
**resources** | [**TemplateExportByNameResources**](TemplateExportByNameResources.md) |  | [optional] 
**stack_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_export_by_name import TemplateExportByName

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateExportByName from a JSON string
template_export_by_name_instance = TemplateExportByName.from_json(json)
# print the JSON string representation of the object
print(TemplateExportByName.to_json())

# convert the object into a dict
template_export_by_name_dict = template_export_by_name_instance.to_dict()
# create an instance of TemplateExportByName from a dict
template_export_by_name_from_dict = TemplateExportByName.from_dict(template_export_by_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


