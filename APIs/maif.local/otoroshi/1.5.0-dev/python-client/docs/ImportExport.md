# ImportExport

The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins** | [**List[ImportExportAdminsInner]**](ImportExportAdminsInner.md) | Current U2F admin at the time of export | 
**api_keys** | [**List[ImportExportApiKeysInner]**](ImportExportApiKeysInner.md) | Current apik keys at the time of export | 
**app_config** | **Dict[str, str]** | Current env variables at the time of export | [optional] 
**config** | [**GlobalConfig**](GlobalConfig.md) |  | 
**var_date** | **datetime** |  | 
**date_raw** | **int** |  | 
**error_templates** | [**List[ImportExportErrorTemplatesInner]**](ImportExportErrorTemplatesInner.md) | Current error templates at the time of export | 
**label** | **str** |  | 
**service_descriptors** | [**List[ImportExportServiceDescriptorsInner]**](ImportExportServiceDescriptorsInner.md) | Current service descriptors at the time of export | 
**service_groups** | [**List[ImportExportServiceGroupsInner]**](ImportExportServiceGroupsInner.md) | Current service groups at the time of export | 
**simple_admins** | [**List[ImportExportSimpleAdminsInner]**](ImportExportSimpleAdminsInner.md) | Current simple admins at the time of export | 
**stats** | [**ImportExportStats**](ImportExportStats.md) |  | 

## Example

```python
from openapi_client.models.import_export import ImportExport

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExport from a JSON string
import_export_instance = ImportExport.from_json(json)
# print the JSON string representation of the object
print(ImportExport.to_json())

# convert the object into a dict
import_export_dict = import_export_instance.to_dict()
# create an instance of ImportExport from a dict
import_export_from_dict = ImportExport.from_dict(import_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


