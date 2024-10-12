# KeyAndSecretDetails

BEK is bitlocker key.              KEK is encryption key for BEK              If the VM was encrypted then we will store follwing details :              1. Secret(BEK) - Url + Backup Data + vaultId.              2. Key(KEK) - Url + Backup Data + vaultId.              BEK and KEK can potentiallty have different vault ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bek_details** | [**BEKDetails**](BEKDetails.md) |  | [optional] 
**kek_details** | [**KEKDetails**](KEKDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_and_secret_details import KeyAndSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of KeyAndSecretDetails from a JSON string
key_and_secret_details_instance = KeyAndSecretDetails.from_json(json)
# print the JSON string representation of the object
print(KeyAndSecretDetails.to_json())

# convert the object into a dict
key_and_secret_details_dict = key_and_secret_details_instance.to_dict()
# create an instance of KeyAndSecretDetails from a dict
key_and_secret_details_from_dict = KeyAndSecretDetails.from_dict(key_and_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


