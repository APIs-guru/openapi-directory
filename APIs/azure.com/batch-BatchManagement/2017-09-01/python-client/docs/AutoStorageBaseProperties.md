# AutoStorageBaseProperties

The properties related to the auto-storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_account_id** | **str** | The resource ID of the storage account to be used for auto-storage account. | 

## Example

```python
from openapi_client.models.auto_storage_base_properties import AutoStorageBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutoStorageBaseProperties from a JSON string
auto_storage_base_properties_instance = AutoStorageBaseProperties.from_json(json)
# print the JSON string representation of the object
print(AutoStorageBaseProperties.to_json())

# convert the object into a dict
auto_storage_base_properties_dict = auto_storage_base_properties_instance.to_dict()
# create an instance of AutoStorageBaseProperties from a dict
auto_storage_base_properties_from_dict = AutoStorageBaseProperties.from_dict(auto_storage_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


