# TransparentDataEncryption

Represents a database transparent data encryption configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**TransparentDataEncryptionProperties**](TransparentDataEncryptionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transparent_data_encryption import TransparentDataEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryption from a JSON string
transparent_data_encryption_instance = TransparentDataEncryption.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryption.to_json())

# convert the object into a dict
transparent_data_encryption_dict = transparent_data_encryption_instance.to_dict()
# create an instance of TransparentDataEncryption from a dict
transparent_data_encryption_from_dict = TransparentDataEncryption.from_dict(transparent_data_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


