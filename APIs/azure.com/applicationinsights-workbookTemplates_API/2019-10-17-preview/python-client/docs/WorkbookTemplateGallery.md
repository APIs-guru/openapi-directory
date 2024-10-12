# WorkbookTemplateGallery

Gallery information for a workbook template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category for the gallery. | [optional] 
**name** | **str** | Name of the workbook template in the gallery. | [optional] 
**order** | **int** | Order of the template within the gallery. | [optional] 
**resource_type** | **str** | Azure resource type supported by the gallery. | [optional] 
**type** | **str** | Type of workbook supported by the workbook template. | [optional] 

## Example

```python
from openapi_client.models.workbook_template_gallery import WorkbookTemplateGallery

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplateGallery from a JSON string
workbook_template_gallery_instance = WorkbookTemplateGallery.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplateGallery.to_json())

# convert the object into a dict
workbook_template_gallery_dict = workbook_template_gallery_instance.to_dict()
# create an instance of WorkbookTemplateGallery from a dict
workbook_template_gallery_from_dict = WorkbookTemplateGallery.from_dict(workbook_template_gallery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


