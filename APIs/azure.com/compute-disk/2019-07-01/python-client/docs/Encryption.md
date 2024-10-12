# Encryption

Encryption at rest settings for disk or snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_set_id** | **str** | ResourceId of the disk encryption set to use for enabling encryption at rest. | [optional] 
**type** | **str** | The type of key used to encrypt the data of the disk. | 

## Example

```python
from openapi_client.models.encryption import Encryption

# TODO update the JSON string below
json = "{}"
# create an instance of Encryption from a JSON string
encryption_instance = Encryption.from_json(json)
# print the JSON string representation of the object
print(Encryption.to_json())

# convert the object into a dict
encryption_dict = encryption_instance.to_dict()
# create an instance of Encryption from a dict
encryption_from_dict = Encryption.from_dict(encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


