# TemplateExportByIDOrgIDsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_id** | **str** |  | [optional] 
**resource_filters** | [**TemplateExportByIDOrgIDsInnerResourceFilters**](TemplateExportByIDOrgIDsInnerResourceFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_export_by_id_org_ids_inner import TemplateExportByIDOrgIDsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateExportByIDOrgIDsInner from a JSON string
template_export_by_id_org_ids_inner_instance = TemplateExportByIDOrgIDsInner.from_json(json)
# print the JSON string representation of the object
print(TemplateExportByIDOrgIDsInner.to_json())

# convert the object into a dict
template_export_by_id_org_ids_inner_dict = template_export_by_id_org_ids_inner_instance.to_dict()
# create an instance of TemplateExportByIDOrgIDsInner from a dict
template_export_by_id_org_ids_inner_from_dict = TemplateExportByIDOrgIDsInner.from_dict(template_export_by_id_org_ids_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


