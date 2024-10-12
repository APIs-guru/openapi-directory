# AccounttaxCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccounttaxCustomBatchResponseEntry]**](AccounttaxCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#accounttaxCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accounttax_custom_batch_response import AccounttaxCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccounttaxCustomBatchResponse from a JSON string
accounttax_custom_batch_response_instance = AccounttaxCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(AccounttaxCustomBatchResponse.to_json())

# convert the object into a dict
accounttax_custom_batch_response_dict = accounttax_custom_batch_response_instance.to_dict()
# create an instance of AccounttaxCustomBatchResponse from a dict
accounttax_custom_batch_response_from_dict = AccounttaxCustomBatchResponse.from_dict(accounttax_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


