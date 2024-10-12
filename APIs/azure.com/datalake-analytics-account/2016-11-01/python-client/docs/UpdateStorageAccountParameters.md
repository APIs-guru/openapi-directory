# UpdateStorageAccountParameters

The parameters used to update an Azure Storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateStorageAccountProperties**](UpdateStorageAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_storage_account_parameters import UpdateStorageAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateStorageAccountParameters from a JSON string
update_storage_account_parameters_instance = UpdateStorageAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateStorageAccountParameters.to_json())

# convert the object into a dict
update_storage_account_parameters_dict = update_storage_account_parameters_instance.to_dict()
# create an instance of UpdateStorageAccountParameters from a dict
update_storage_account_parameters_from_dict = UpdateStorageAccountParameters.from_dict(update_storage_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


