# KeyImportParameters

The key import parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hsm** | **bool** | Whether to import as a hardware key (HSM) or software key. | [optional] 
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**key** | [**JsonWebKey**](JsonWebKey.md) |  | 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.key_import_parameters import KeyImportParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyImportParameters from a JSON string
key_import_parameters_instance = KeyImportParameters.from_json(json)
# print the JSON string representation of the object
print(KeyImportParameters.to_json())

# convert the object into a dict
key_import_parameters_dict = key_import_parameters_instance.to_dict()
# create an instance of KeyImportParameters from a dict
key_import_parameters_from_dict = KeyImportParameters.from_dict(key_import_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


