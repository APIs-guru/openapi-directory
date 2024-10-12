# AccountsCustomBatchResponseEntry

A batch entry encoding a single non-batch accounts response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsCustomBatchResponseEntry&#x60;\&quot; | [optional] 

## Example

```python
from openapi_client.models.accounts_custom_batch_response_entry import AccountsCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsCustomBatchResponseEntry from a JSON string
accounts_custom_batch_response_entry_instance = AccountsCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(AccountsCustomBatchResponseEntry.to_json())

# convert the object into a dict
accounts_custom_batch_response_entry_dict = accounts_custom_batch_response_entry_instance.to_dict()
# create an instance of AccountsCustomBatchResponseEntry from a dict
accounts_custom_batch_response_entry_from_dict = AccountsCustomBatchResponseEntry.from_dict(accounts_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


