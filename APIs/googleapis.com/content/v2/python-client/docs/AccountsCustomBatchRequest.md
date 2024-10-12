# AccountsCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccountsCustomBatchRequestEntry]**](AccountsCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.accounts_custom_batch_request import AccountsCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsCustomBatchRequest from a JSON string
accounts_custom_batch_request_instance = AccountsCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsCustomBatchRequest.to_json())

# convert the object into a dict
accounts_custom_batch_request_dict = accounts_custom_batch_request_instance.to_dict()
# create an instance of AccountsCustomBatchRequest from a dict
accounts_custom_batch_request_from_dict = AccountsCustomBatchRequest.from_dict(accounts_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


