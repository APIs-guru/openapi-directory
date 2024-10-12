# UpdateStorageAccountProperties

The Azure Storage account properties to use when updating an Azure Storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | The updated access key associated with this Azure Storage account that will be used to connect to it. | [optional] 
**suffix** | **str** | The optional suffix for the storage account. | [optional] 

## Example

```python
from openapi_client.models.update_storage_account_properties import UpdateStorageAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateStorageAccountProperties from a JSON string
update_storage_account_properties_instance = UpdateStorageAccountProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateStorageAccountProperties.to_json())

# convert the object into a dict
update_storage_account_properties_dict = update_storage_account_properties_instance.to_dict()
# create an instance of UpdateStorageAccountProperties from a dict
update_storage_account_properties_from_dict = UpdateStorageAccountProperties.from_dict(update_storage_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


