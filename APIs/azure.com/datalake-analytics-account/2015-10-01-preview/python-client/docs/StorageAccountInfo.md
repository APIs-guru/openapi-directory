# StorageAccountInfo

Azure Storage account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the account name associated with the Azure storage account. | 
**properties** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | 

## Example

```python
from openapi_client.models.storage_account_info import StorageAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountInfo from a JSON string
storage_account_info_instance = StorageAccountInfo.from_json(json)
# print the JSON string representation of the object
print(StorageAccountInfo.to_json())

# convert the object into a dict
storage_account_info_dict = storage_account_info_instance.to_dict()
# create an instance of StorageAccountInfo from a dict
storage_account_info_from_dict = StorageAccountInfo.from_dict(storage_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


