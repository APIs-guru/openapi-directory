# StorageAccountCheckNameAvailabilityParameters

The parameters used to check the availability of the storage account name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** |  | [optional] [default to 'Microsoft.Storage/storageAccounts']

## Example

```python
from openapi_client.models.storage_account_check_name_availability_parameters import StorageAccountCheckNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCheckNameAvailabilityParameters from a JSON string
storage_account_check_name_availability_parameters_instance = StorageAccountCheckNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCheckNameAvailabilityParameters.to_json())

# convert the object into a dict
storage_account_check_name_availability_parameters_dict = storage_account_check_name_availability_parameters_instance.to_dict()
# create an instance of StorageAccountCheckNameAvailabilityParameters from a dict
storage_account_check_name_availability_parameters_from_dict = StorageAccountCheckNameAvailabilityParameters.from_dict(storage_account_check_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


