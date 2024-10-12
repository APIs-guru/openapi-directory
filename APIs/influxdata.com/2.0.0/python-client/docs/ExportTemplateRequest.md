# ExportTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_ids** | [**List[TemplateExportByIDOrgIDsInner]**](TemplateExportByIDOrgIDsInner.md) |  | [optional] 
**resources** | [**TemplateExportByNameResources**](TemplateExportByNameResources.md) |  | [optional] 
**stack_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.export_template_request import ExportTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportTemplateRequest from a JSON string
export_template_request_instance = ExportTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(ExportTemplateRequest.to_json())

# convert the object into a dict
export_template_request_dict = export_template_request_instance.to_dict()
# create an instance of ExportTemplateRequest from a dict
export_template_request_from_dict = ExportTemplateRequest.from_dict(export_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


