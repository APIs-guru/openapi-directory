# ImportContextBakImportOptions

Import parameters specific to SQL Server .BAK files

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bak_type** | **str** | Type of the bak content, FULL or DIFF. | [optional] 
**encryption_options** | [**ImportContextBakImportOptionsEncryptionOptions**](ImportContextBakImportOptionsEncryptionOptions.md) |  | [optional] 
**no_recovery** | **bool** | Whether or not the backup importing will restore database with NORECOVERY option Applies only to Cloud SQL for SQL Server. | [optional] 
**recovery_only** | **bool** | Whether or not the backup importing request will just bring database online without downloading Bak content only one of \&quot;no_recovery\&quot; and \&quot;recovery_only\&quot; can be true otherwise error will return. Applies only to Cloud SQL for SQL Server. | [optional] 
**stop_at** | **str** | Optional. The timestamp when the import should stop. This timestamp is in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format (for example, &#x60;2023-10-01T16:19:00.094&#x60;). This field is equivalent to the STOPAT keyword and applies to Cloud SQL for SQL Server only. | [optional] 
**stop_at_mark** | **str** | Optional. The marked transaction where the import should stop. This field is equivalent to the STOPATMARK keyword and applies to Cloud SQL for SQL Server only. | [optional] 
**striped** | **bool** | Whether or not the backup set being restored is striped. Applies only to Cloud SQL for SQL Server. | [optional] 

## Example

```python
from openapi_client.models.import_context_bak_import_options import ImportContextBakImportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ImportContextBakImportOptions from a JSON string
import_context_bak_import_options_instance = ImportContextBakImportOptions.from_json(json)
# print the JSON string representation of the object
print(ImportContextBakImportOptions.to_json())

# convert the object into a dict
import_context_bak_import_options_dict = import_context_bak_import_options_instance.to_dict()
# create an instance of ImportContextBakImportOptions from a dict
import_context_bak_import_options_from_dict = ImportContextBakImportOptions.from_dict(import_context_bak_import_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


