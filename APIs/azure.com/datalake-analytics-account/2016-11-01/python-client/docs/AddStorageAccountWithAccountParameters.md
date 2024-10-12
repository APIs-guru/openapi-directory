# AddStorageAccountWithAccountParameters

The parameters used to add a new Azure Storage account while creating a new Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the Azure Storage account to add. | 
**properties** | [**AddStorageAccountProperties**](AddStorageAccountProperties.md) |  | 

## Example

```python
from openapi_client.models.add_storage_account_with_account_parameters import AddStorageAccountWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AddStorageAccountWithAccountParameters from a JSON string
add_storage_account_with_account_parameters_instance = AddStorageAccountWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(AddStorageAccountWithAccountParameters.to_json())

# convert the object into a dict
add_storage_account_with_account_parameters_dict = add_storage_account_with_account_parameters_instance.to_dict()
# create an instance of AddStorageAccountWithAccountParameters from a dict
add_storage_account_with_account_parameters_from_dict = AddStorageAccountWithAccountParameters.from_dict(add_storage_account_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


