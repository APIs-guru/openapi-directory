# AccountstatusesCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccountstatusesCustomBatchResponseEntry]**](AccountstatusesCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#accountstatusesCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accountstatuses_custom_batch_response import AccountstatusesCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountstatusesCustomBatchResponse from a JSON string
accountstatuses_custom_batch_response_instance = AccountstatusesCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(AccountstatusesCustomBatchResponse.to_json())

# convert the object into a dict
accountstatuses_custom_batch_response_dict = accountstatuses_custom_batch_response_instance.to_dict()
# create an instance of AccountstatusesCustomBatchResponse from a dict
accountstatuses_custom_batch_response_from_dict = AccountstatusesCustomBatchResponse.from_dict(accountstatuses_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


