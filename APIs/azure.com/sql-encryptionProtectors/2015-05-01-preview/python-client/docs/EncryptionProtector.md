# EncryptionProtector

The server encryption protector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of encryption protector. This is metadata used for the Azure portal experience. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**EncryptionProtectorProperties**](EncryptionProtectorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_protector import EncryptionProtector

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionProtector from a JSON string
encryption_protector_instance = EncryptionProtector.from_json(json)
# print the JSON string representation of the object
print(EncryptionProtector.to_json())

# convert the object into a dict
encryption_protector_dict = encryption_protector_instance.to_dict()
# create an instance of EncryptionProtector from a dict
encryption_protector_from_dict = EncryptionProtector.from_dict(encryption_protector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


