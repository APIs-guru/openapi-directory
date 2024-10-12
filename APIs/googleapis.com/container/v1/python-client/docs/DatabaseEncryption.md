# DatabaseEncryption

Configuration of etcd encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key | [optional] 
**state** | **str** | The desired state of etcd encryption. | [optional] 

## Example

```python
from openapi_client.models.database_encryption import DatabaseEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseEncryption from a JSON string
database_encryption_instance = DatabaseEncryption.from_json(json)
# print the JSON string representation of the object
print(DatabaseEncryption.to_json())

# convert the object into a dict
database_encryption_dict = database_encryption_instance.to_dict()
# create an instance of DatabaseEncryption from a dict
database_encryption_from_dict = DatabaseEncryption.from_dict(database_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


