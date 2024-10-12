# DatabasePropertiesTransparentDataEncryptionInnerProperties

Represents the properties of a database transparent data encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the database transparent data encryption. | [optional] 

## Example

```python
from openapi_client.models.database_properties_transparent_data_encryption_inner_properties import DatabasePropertiesTransparentDataEncryptionInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesTransparentDataEncryptionInnerProperties from a JSON string
database_properties_transparent_data_encryption_inner_properties_instance = DatabasePropertiesTransparentDataEncryptionInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesTransparentDataEncryptionInnerProperties.to_json())

# convert the object into a dict
database_properties_transparent_data_encryption_inner_properties_dict = database_properties_transparent_data_encryption_inner_properties_instance.to_dict()
# create an instance of DatabasePropertiesTransparentDataEncryptionInnerProperties from a dict
database_properties_transparent_data_encryption_inner_properties_from_dict = DatabasePropertiesTransparentDataEncryptionInnerProperties.from_dict(database_properties_transparent_data_encryption_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


