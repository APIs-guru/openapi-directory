# WorkbookTemplateProperties

Properties that contain a workbook template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Information about the author of the workbook template. | [optional] 
**galleries** | [**List[WorkbookTemplateGallery]**](WorkbookTemplateGallery.md) | Workbook galleries supported by the template. | 
**localized** | **Dict[str, List[WorkbookTemplateLocalizedGallery]]** | Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal. | [optional] 
**priority** | **int** | Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode. | [optional] 
**template_data** | **object** | Valid JSON object containing workbook template payload. | 

## Example

```python
from openapi_client.models.workbook_template_properties import WorkbookTemplateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplateProperties from a JSON string
workbook_template_properties_instance = WorkbookTemplateProperties.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplateProperties.to_json())

# convert the object into a dict
workbook_template_properties_dict = workbook_template_properties_instance.to_dict()
# create an instance of WorkbookTemplateProperties from a dict
workbook_template_properties_from_dict = WorkbookTemplateProperties.from_dict(workbook_template_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


