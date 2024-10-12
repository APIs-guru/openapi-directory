# AddStorageAccountParameters

Additional Azure Storage account parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | 

## Example

```python
from openapi_client.models.add_storage_account_parameters import AddStorageAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AddStorageAccountParameters from a JSON string
add_storage_account_parameters_instance = AddStorageAccountParameters.from_json(json)
# print the JSON string representation of the object
print(AddStorageAccountParameters.to_json())

# convert the object into a dict
add_storage_account_parameters_dict = add_storage_account_parameters_instance.to_dict()
# create an instance of AddStorageAccountParameters from a dict
add_storage_account_parameters_from_dict = AddStorageAccountParameters.from_dict(add_storage_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


