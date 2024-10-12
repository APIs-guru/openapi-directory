# AddStorageAccountProperties

The Azure Storage account properties to use when adding a new Azure Storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | The access key associated with this Azure Storage account that will be used to connect to it. | 
**suffix** | **str** | The optional suffix for the storage account. | [optional] 

## Example

```python
from openapi_client.models.add_storage_account_properties import AddStorageAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddStorageAccountProperties from a JSON string
add_storage_account_properties_instance = AddStorageAccountProperties.from_json(json)
# print the JSON string representation of the object
print(AddStorageAccountProperties.to_json())

# convert the object into a dict
add_storage_account_properties_dict = add_storage_account_properties_instance.to_dict()
# create an instance of AddStorageAccountProperties from a dict
add_storage_account_properties_from_dict = AddStorageAccountProperties.from_dict(add_storage_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


