# AccountstatusesCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[AccountstatusesCustomBatchRequestEntry]**](AccountstatusesCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.accountstatuses_custom_batch_request import AccountstatusesCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountstatusesCustomBatchRequest from a JSON string
accountstatuses_custom_batch_request_instance = AccountstatusesCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(AccountstatusesCustomBatchRequest.to_json())

# convert the object into a dict
accountstatuses_custom_batch_request_dict = accountstatuses_custom_batch_request_instance.to_dict()
# create an instance of AccountstatusesCustomBatchRequest from a dict
accountstatuses_custom_batch_request_from_dict = AccountstatusesCustomBatchRequest.from_dict(accountstatuses_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


