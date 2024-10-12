# WorkbookTemplate

An Application Insights workbook template definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkbookTemplateProperties**](WorkbookTemplateProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.workbook_template import WorkbookTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplate from a JSON string
workbook_template_instance = WorkbookTemplate.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplate.to_json())

# convert the object into a dict
workbook_template_dict = workbook_template_instance.to_dict()
# create an instance of WorkbookTemplate from a dict
workbook_template_from_dict = WorkbookTemplate.from_dict(workbook_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


