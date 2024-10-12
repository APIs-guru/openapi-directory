# UpdateStorageAccountWithAccountParameters

The parameters used to update an Azure Storage account while updating a Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the Azure Storage account to update. | 
**properties** | [**UpdateStorageAccountProperties**](UpdateStorageAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_storage_account_with_account_parameters import UpdateStorageAccountWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateStorageAccountWithAccountParameters from a JSON string
update_storage_account_with_account_parameters_instance = UpdateStorageAccountWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateStorageAccountWithAccountParameters.to_json())

# convert the object into a dict
update_storage_account_with_account_parameters_dict = update_storage_account_with_account_parameters_instance.to_dict()
# create an instance of UpdateStorageAccountWithAccountParameters from a dict
update_storage_account_with_account_parameters_from_dict = UpdateStorageAccountWithAccountParameters.from_dict(update_storage_account_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


