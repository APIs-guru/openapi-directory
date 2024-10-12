# AccountstatusesCustomBatchResponseEntry

A batch entry encoding a single non-batch accountstatuses response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_status** | [**AccountStatus**](AccountStatus.md) |  | [optional] 
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 

## Example

```python
from openapi_client.models.accountstatuses_custom_batch_response_entry import AccountstatusesCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccountstatusesCustomBatchResponseEntry from a JSON string
accountstatuses_custom_batch_response_entry_instance = AccountstatusesCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(AccountstatusesCustomBatchResponseEntry.to_json())

# convert the object into a dict
accountstatuses_custom_batch_response_entry_dict = accountstatuses_custom_batch_response_entry_instance.to_dict()
# create an instance of AccountstatusesCustomBatchResponseEntry from a dict
accountstatuses_custom_batch_response_entry_from_dict = AccountstatusesCustomBatchResponseEntry.from_dict(accountstatuses_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


