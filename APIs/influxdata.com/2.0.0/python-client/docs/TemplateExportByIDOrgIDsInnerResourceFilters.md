# TemplateExportByIDOrgIDsInnerResourceFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_label** | **List[str]** |  | [optional] 
**by_resource_kind** | [**List[TemplateKind]**](TemplateKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_export_by_id_org_ids_inner_resource_filters import TemplateExportByIDOrgIDsInnerResourceFilters

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateExportByIDOrgIDsInnerResourceFilters from a JSON string
template_export_by_id_org_ids_inner_resource_filters_instance = TemplateExportByIDOrgIDsInnerResourceFilters.from_json(json)
# print the JSON string representation of the object
print(TemplateExportByIDOrgIDsInnerResourceFilters.to_json())

# convert the object into a dict
template_export_by_id_org_ids_inner_resource_filters_dict = template_export_by_id_org_ids_inner_resource_filters_instance.to_dict()
# create an instance of TemplateExportByIDOrgIDsInnerResourceFilters from a dict
template_export_by_id_org_ids_inner_resource_filters_from_dict = TemplateExportByIDOrgIDsInnerResourceFilters.from_dict(template_export_by_id_org_ids_inner_resource_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


