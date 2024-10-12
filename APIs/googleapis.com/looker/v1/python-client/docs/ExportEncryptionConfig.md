# ExportEncryptionConfig

Configuration for Encryption - e.g. CMEK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Required. Name of the CMEK key in KMS. | [optional] 

## Example

```python
from openapi_client.models.export_encryption_config import ExportEncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExportEncryptionConfig from a JSON string
export_encryption_config_instance = ExportEncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(ExportEncryptionConfig.to_json())

# convert the object into a dict
export_encryption_config_dict = export_encryption_config_instance.to_dict()
# create an instance of ExportEncryptionConfig from a dict
export_encryption_config_from_dict = ExportEncryptionConfig.from_dict(export_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


