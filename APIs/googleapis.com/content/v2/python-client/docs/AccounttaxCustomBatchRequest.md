# AccounttaxCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccounttaxCustomBatchRequestEntry]**](AccounttaxCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.accounttax_custom_batch_request import AccounttaxCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccounttaxCustomBatchRequest from a JSON string
accounttax_custom_batch_request_instance = AccounttaxCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(AccounttaxCustomBatchRequest.to_json())

# convert the object into a dict
accounttax_custom_batch_request_dict = accounttax_custom_batch_request_instance.to_dict()
# create an instance of AccounttaxCustomBatchRequest from a dict
accounttax_custom_batch_request_from_dict = AccounttaxCustomBatchRequest.from_dict(accounttax_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


