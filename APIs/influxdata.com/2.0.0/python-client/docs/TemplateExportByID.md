# TemplateExportByID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_ids** | [**List[TemplateExportByIDOrgIDsInner]**](TemplateExportByIDOrgIDsInner.md) |  | [optional] 
**resources** | [**TemplateExportByIDResources**](TemplateExportByIDResources.md) |  | [optional] 
**stack_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_export_by_id import TemplateExportByID

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateExportByID from a JSON string
template_export_by_id_instance = TemplateExportByID.from_json(json)
# print the JSON string representation of the object
print(TemplateExportByID.to_json())

# convert the object into a dict
template_export_by_id_dict = template_export_by_id_instance.to_dict()
# create an instance of TemplateExportByID from a dict
template_export_by_id_from_dict = TemplateExportByID.from_dict(template_export_by_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


