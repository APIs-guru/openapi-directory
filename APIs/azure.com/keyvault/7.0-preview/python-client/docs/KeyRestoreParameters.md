# KeyRestoreParameters

The key restore parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob associated with a key bundle. | 

## Example

```python
from openapi_client.models.key_restore_parameters import KeyRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRestoreParameters from a JSON string
key_restore_parameters_instance = KeyRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(KeyRestoreParameters.to_json())

# convert the object into a dict
key_restore_parameters_dict = key_restore_parameters_instance.to_dict()
# create an instance of KeyRestoreParameters from a dict
key_restore_parameters_from_dict = KeyRestoreParameters.from_dict(key_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


