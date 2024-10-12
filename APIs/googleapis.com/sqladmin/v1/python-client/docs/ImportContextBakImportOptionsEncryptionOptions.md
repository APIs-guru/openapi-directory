# ImportContextBakImportOptionsEncryptionOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_path** | **str** | Path to the Certificate (.cer) in Cloud Storage, in the form &#x60;gs://bucketName/fileName&#x60;. The instance must have write permissions to the bucket and read access to the file. | [optional] 
**pvk_password** | **str** | Password that encrypts the private key | [optional] 
**pvk_path** | **str** | Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form &#x60;gs://bucketName/fileName&#x60;. The instance must have write permissions to the bucket and read access to the file. | [optional] 

## Example

```python
from openapi_client.models.import_context_bak_import_options_encryption_options import ImportContextBakImportOptionsEncryptionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ImportContextBakImportOptionsEncryptionOptions from a JSON string
import_context_bak_import_options_encryption_options_instance = ImportContextBakImportOptionsEncryptionOptions.from_json(json)
# print the JSON string representation of the object
print(ImportContextBakImportOptionsEncryptionOptions.to_json())

# convert the object into a dict
import_context_bak_import_options_encryption_options_dict = import_context_bak_import_options_encryption_options_instance.to_dict()
# create an instance of ImportContextBakImportOptionsEncryptionOptions from a dict
import_context_bak_import_options_encryption_options_from_dict = ImportContextBakImportOptionsEncryptionOptions.from_dict(import_context_bak_import_options_encryption_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


