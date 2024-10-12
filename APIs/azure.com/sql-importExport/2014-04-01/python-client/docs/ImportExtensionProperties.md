# ImportExtensionProperties

Represents the properties for an import operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_mode** | **str** | The type of import operation being performed. This is always Import. | 
**administrator_login** | **str** | The name of the SQL administrator. | 
**administrator_login_password** | **str** | The password of the SQL administrator. | 
**authentication_type** | **str** | The authentication type. | [optional] [default to 'SQL']
**storage_key** | **str** | The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a \&quot;?.\&quot; | 
**storage_key_type** | **str** | The type of the storage key to use. | 
**storage_uri** | **str** | The storage uri to use. | 

## Example

```python
from openapi_client.models.import_extension_properties import ImportExtensionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExtensionProperties from a JSON string
import_extension_properties_instance = ImportExtensionProperties.from_json(json)
# print the JSON string representation of the object
print(ImportExtensionProperties.to_json())

# convert the object into a dict
import_extension_properties_dict = import_extension_properties_instance.to_dict()
# create an instance of ImportExtensionProperties from a dict
import_extension_properties_from_dict = ImportExtensionProperties.from_dict(import_extension_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


