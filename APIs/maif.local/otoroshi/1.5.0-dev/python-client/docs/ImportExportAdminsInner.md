# ImportExportAdminsInner

Administrator using FIDO U2F device to access Otoroshi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | The creation date of the user | 
**label** | **str** | The label for the user | 
**password** | **str** | The hashed password of the user | 
**registration** | **Dict[str, str]** | The U2F registration slug | 
**username** | **str** | The email address of the user | 

## Example

```python
from openapi_client.models.import_export_admins_inner import ImportExportAdminsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportAdminsInner from a JSON string
import_export_admins_inner_instance = ImportExportAdminsInner.from_json(json)
# print the JSON string representation of the object
print(ImportExportAdminsInner.to_json())

# convert the object into a dict
import_export_admins_inner_dict = import_export_admins_inner_instance.to_dict()
# create an instance of ImportExportAdminsInner from a dict
import_export_admins_inner_from_dict = ImportExportAdminsInner.from_dict(import_export_admins_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


