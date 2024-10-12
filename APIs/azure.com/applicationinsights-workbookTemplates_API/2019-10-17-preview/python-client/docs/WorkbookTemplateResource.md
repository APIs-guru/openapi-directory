# WorkbookTemplateResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.workbook_template_resource import WorkbookTemplateResource

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplateResource from a JSON string
workbook_template_resource_instance = WorkbookTemplateResource.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplateResource.to_json())

# convert the object into a dict
workbook_template_resource_dict = workbook_template_resource_instance.to_dict()
# create an instance of WorkbookTemplateResource from a dict
workbook_template_resource_from_dict = WorkbookTemplateResource.from_dict(workbook_template_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


