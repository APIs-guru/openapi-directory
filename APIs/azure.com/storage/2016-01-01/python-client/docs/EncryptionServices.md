# EncryptionServices

A list of services that support encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | [**EncryptionService**](EncryptionService.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption_services import EncryptionServices

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionServices from a JSON string
encryption_services_instance = EncryptionServices.from_json(json)
# print the JSON string representation of the object
print(EncryptionServices.to_json())

# convert the object into a dict
encryption_services_dict = encryption_services_instance.to_dict()
# create an instance of EncryptionServices from a dict
encryption_services_from_dict = EncryptionServices.from_dict(encryption_services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


