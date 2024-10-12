# TransparentDataEncryptionProperties

Represents the properties of a database transparent data encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the database transparent data encryption. | [optional] 

## Example

```python
from openapi_client.models.transparent_data_encryption_properties import TransparentDataEncryptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionProperties from a JSON string
transparent_data_encryption_properties_instance = TransparentDataEncryptionProperties.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionProperties.to_json())

# convert the object into a dict
transparent_data_encryption_properties_dict = transparent_data_encryption_properties_instance.to_dict()
# create an instance of TransparentDataEncryptionProperties from a dict
transparent_data_encryption_properties_from_dict = TransparentDataEncryptionProperties.from_dict(transparent_data_encryption_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


