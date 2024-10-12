# AccountsCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccountsCustomBatchResponseEntry]**](AccountsCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accounts_custom_batch_response import AccountsCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsCustomBatchResponse from a JSON string
accounts_custom_batch_response_instance = AccountsCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsCustomBatchResponse.to_json())

# convert the object into a dict
accounts_custom_batch_response_dict = accounts_custom_batch_response_instance.to_dict()
# create an instance of AccountsCustomBatchResponse from a dict
accounts_custom_batch_response_from_dict = AccountsCustomBatchResponse.from_dict(accounts_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


