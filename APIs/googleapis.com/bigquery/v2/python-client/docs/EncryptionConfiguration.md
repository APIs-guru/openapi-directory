# EncryptionConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. | [optional] 

## Example

```python
from openapi_client.models.encryption_configuration import EncryptionConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionConfiguration from a JSON string
encryption_configuration_instance = EncryptionConfiguration.from_json(json)
# print the JSON string representation of the object
print(EncryptionConfiguration.to_json())

# convert the object into a dict
encryption_configuration_dict = encryption_configuration_instance.to_dict()
# create an instance of EncryptionConfiguration from a dict
encryption_configuration_from_dict = EncryptionConfiguration.from_dict(encryption_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


