# AutoStorageProperties

Contains information about the auto-storage account associated with a Batch account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_key_sync** | **datetime** | The UTC time at which storage keys were last synchronized with the Batch account. | 
**storage_account_id** | **str** | The resource ID of the storage account to be used for auto-storage account. | 

## Example

```python
from openapi_client.models.auto_storage_properties import AutoStorageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutoStorageProperties from a JSON string
auto_storage_properties_instance = AutoStorageProperties.from_json(json)
# print the JSON string representation of the object
print(AutoStorageProperties.to_json())

# convert the object into a dict
auto_storage_properties_dict = auto_storage_properties_instance.to_dict()
# create an instance of AutoStorageProperties from a dict
auto_storage_properties_from_dict = AutoStorageProperties.from_dict(auto_storage_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


