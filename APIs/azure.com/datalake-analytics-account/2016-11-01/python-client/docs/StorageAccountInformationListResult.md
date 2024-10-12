# StorageAccountInformationListResult

Azure Storage account list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[StorageAccountInformation]**](StorageAccountInformation.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_information_list_result import StorageAccountInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountInformationListResult from a JSON string
storage_account_information_list_result_instance = StorageAccountInformationListResult.from_json(json)
# print the JSON string representation of the object
print(StorageAccountInformationListResult.to_json())

# convert the object into a dict
storage_account_information_list_result_dict = storage_account_information_list_result_instance.to_dict()
# create an instance of StorageAccountInformationListResult from a dict
storage_account_information_list_result_from_dict = StorageAccountInformationListResult.from_dict(storage_account_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


