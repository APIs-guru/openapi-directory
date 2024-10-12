# WorkbookTemplateLocalizedGallery

Localized template data and gallery information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**galleries** | [**List[WorkbookTemplateGallery]**](WorkbookTemplateGallery.md) | Workbook galleries supported by the template. | [optional] 
**template_data** | **object** | Valid JSON object containing workbook template payload. | [optional] 

## Example

```python
from openapi_client.models.workbook_template_localized_gallery import WorkbookTemplateLocalizedGallery

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplateLocalizedGallery from a JSON string
workbook_template_localized_gallery_instance = WorkbookTemplateLocalizedGallery.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplateLocalizedGallery.to_json())

# convert the object into a dict
workbook_template_localized_gallery_dict = workbook_template_localized_gallery_instance.to_dict()
# create an instance of WorkbookTemplateLocalizedGallery from a dict
workbook_template_localized_gallery_from_dict = WorkbookTemplateLocalizedGallery.from_dict(workbook_template_localized_gallery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


