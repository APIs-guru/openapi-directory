# StorageAccountMicrosoftEndpoints

The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | **str** | Gets the blob endpoint. | [optional] [readonly] 
**dfs** | **str** | Gets the dfs endpoint. | [optional] [readonly] 
**file** | **str** | Gets the file endpoint. | [optional] [readonly] 
**queue** | **str** | Gets the queue endpoint. | [optional] [readonly] 
**table** | **str** | Gets the table endpoint. | [optional] [readonly] 
**web** | **str** | Gets the web endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_microsoft_endpoints import StorageAccountMicrosoftEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountMicrosoftEndpoints from a JSON string
storage_account_microsoft_endpoints_instance = StorageAccountMicrosoftEndpoints.from_json(json)
# print the JSON string representation of the object
print(StorageAccountMicrosoftEndpoints.to_json())

# convert the object into a dict
storage_account_microsoft_endpoints_dict = storage_account_microsoft_endpoints_instance.to_dict()
# create an instance of StorageAccountMicrosoftEndpoints from a dict
storage_account_microsoft_endpoints_from_dict = StorageAccountMicrosoftEndpoints.from_dict(storage_account_microsoft_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


