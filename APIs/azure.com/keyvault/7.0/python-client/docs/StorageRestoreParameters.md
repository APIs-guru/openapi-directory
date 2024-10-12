# StorageRestoreParameters

The secret restore parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob associated with a storage account. | 

## Example

```python
from openapi_client.models.storage_restore_parameters import StorageRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageRestoreParameters from a JSON string
storage_restore_parameters_instance = StorageRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(StorageRestoreParameters.to_json())

# convert the object into a dict
storage_restore_parameters_dict = storage_restore_parameters_instance.to_dict()
# create an instance of StorageRestoreParameters from a dict
storage_restore_parameters_from_dict = StorageRestoreParameters.from_dict(storage_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


