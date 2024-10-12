# WorkbookTemplateUpdateParameters

The parameters that can be provided when updating workbook template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkbookTemplateProperties**](WorkbookTemplateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.workbook_template_update_parameters import WorkbookTemplateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplateUpdateParameters from a JSON string
workbook_template_update_parameters_instance = WorkbookTemplateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplateUpdateParameters.to_json())

# convert the object into a dict
workbook_template_update_parameters_dict = workbook_template_update_parameters_instance.to_dict()
# create an instance of WorkbookTemplateUpdateParameters from a dict
workbook_template_update_parameters_from_dict = WorkbookTemplateUpdateParameters.from_dict(workbook_template_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


