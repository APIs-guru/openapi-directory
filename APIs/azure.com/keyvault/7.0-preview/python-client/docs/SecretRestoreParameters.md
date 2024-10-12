# SecretRestoreParameters

The secret restore parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob associated with a secret bundle. | 

## Example

```python
from openapi_client.models.secret_restore_parameters import SecretRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretRestoreParameters from a JSON string
secret_restore_parameters_instance = SecretRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(SecretRestoreParameters.to_json())

# convert the object into a dict
secret_restore_parameters_dict = secret_restore_parameters_instance.to_dict()
# create an instance of SecretRestoreParameters from a dict
secret_restore_parameters_from_dict = SecretRestoreParameters.from_dict(secret_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


