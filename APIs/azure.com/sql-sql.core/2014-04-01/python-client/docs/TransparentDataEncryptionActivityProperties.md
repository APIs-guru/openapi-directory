# TransparentDataEncryptionActivityProperties

Represents the properties of a database transparent data encryption Scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent_complete** | **float** | The percent complete of the transparent data encryption scan for a database. | [optional] [readonly] 
**status** | **str** | The status of the database. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transparent_data_encryption_activity_properties import TransparentDataEncryptionActivityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransparentDataEncryptionActivityProperties from a JSON string
transparent_data_encryption_activity_properties_instance = TransparentDataEncryptionActivityProperties.from_json(json)
# print the JSON string representation of the object
print(TransparentDataEncryptionActivityProperties.to_json())

# convert the object into a dict
transparent_data_encryption_activity_properties_dict = transparent_data_encryption_activity_properties_instance.to_dict()
# create an instance of TransparentDataEncryptionActivityProperties from a dict
transparent_data_encryption_activity_properties_from_dict = TransparentDataEncryptionActivityProperties.from_dict(transparent_data_encryption_activity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


