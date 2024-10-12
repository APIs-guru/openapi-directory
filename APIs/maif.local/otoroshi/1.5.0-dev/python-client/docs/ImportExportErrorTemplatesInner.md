# ImportExportErrorTemplatesInner

Error templates for a service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **Dict[str, str]** | Map for custom messages | 
**service_id** | **str** | The Id of the service for which the error template is enabled | 
**template40x** | **str** | The html template for 40x errors | 
**template50x** | **str** | The html template for 50x errors | 
**template_build** | **str** | The html template for build page | 
**template_maintenance** | **str** | The html template for maintenance page | 

## Example

```python
from openapi_client.models.import_export_error_templates_inner import ImportExportErrorTemplatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportErrorTemplatesInner from a JSON string
import_export_error_templates_inner_instance = ImportExportErrorTemplatesInner.from_json(json)
# print the JSON string representation of the object
print(ImportExportErrorTemplatesInner.to_json())

# convert the object into a dict
import_export_error_templates_inner_dict = import_export_error_templates_inner_instance.to_dict()
# create an instance of ImportExportErrorTemplatesInner from a dict
import_export_error_templates_inner_from_dict = ImportExportErrorTemplatesInner.from_dict(import_export_error_templates_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


