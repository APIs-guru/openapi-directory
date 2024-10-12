# ImportExportSimpleAdminsInner

Administrator using just login/password tuple to access Otoroshi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | The creation date of the user | 
**label** | **str** | The label for the user | 
**password** | **str** | The hashed password of the user | 
**username** | **str** | The email address of the user | 

## Example

```python
from openapi_client.models.import_export_simple_admins_inner import ImportExportSimpleAdminsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportSimpleAdminsInner from a JSON string
import_export_simple_admins_inner_instance = ImportExportSimpleAdminsInner.from_json(json)
# print the JSON string representation of the object
print(ImportExportSimpleAdminsInner.to_json())

# convert the object into a dict
import_export_simple_admins_inner_dict = import_export_simple_admins_inner_instance.to_dict()
# create an instance of ImportExportSimpleAdminsInner from a dict
import_export_simple_admins_inner_from_dict = ImportExportSimpleAdminsInner.from_dict(import_export_simple_admins_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


