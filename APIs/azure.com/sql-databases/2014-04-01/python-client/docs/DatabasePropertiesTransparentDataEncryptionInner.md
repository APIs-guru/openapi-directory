# DatabasePropertiesTransparentDataEncryptionInner

Represents a database transparent data encryption configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**DatabasePropertiesTransparentDataEncryptionInnerProperties**](DatabasePropertiesTransparentDataEncryptionInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.database_properties_transparent_data_encryption_inner import DatabasePropertiesTransparentDataEncryptionInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesTransparentDataEncryptionInner from a JSON string
database_properties_transparent_data_encryption_inner_instance = DatabasePropertiesTransparentDataEncryptionInner.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesTransparentDataEncryptionInner.to_json())

# convert the object into a dict
database_properties_transparent_data_encryption_inner_dict = database_properties_transparent_data_encryption_inner_instance.to_dict()
# create an instance of DatabasePropertiesTransparentDataEncryptionInner from a dict
database_properties_transparent_data_encryption_inner_from_dict = DatabasePropertiesTransparentDataEncryptionInner.from_dict(database_properties_transparent_data_encryption_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


