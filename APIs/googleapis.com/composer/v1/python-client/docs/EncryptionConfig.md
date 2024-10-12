# EncryptionConfig

The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Optional. Customer-managed Encryption Key available through Google&#39;s Key Management Service. Cannot be updated. If not specified, Google-managed key will be used. | [optional] 

## Example

```python
from openapi_client.models.encryption_config import EncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionConfig from a JSON string
encryption_config_instance = EncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptionConfig.to_json())

# convert the object into a dict
encryption_config_dict = encryption_config_instance.to_dict()
# create an instance of EncryptionConfig from a dict
encryption_config_from_dict = EncryptionConfig.from_dict(encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


