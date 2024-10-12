# AccountstatusesCustomBatchRequestEntry

A batch entry encoding a single non-batch accountstatuses request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the (sub-)account whose status to get. | [optional] 
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**destinations** | **List[str]** | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.accountstatuses_custom_batch_request_entry import AccountstatusesCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccountstatusesCustomBatchRequestEntry from a JSON string
accountstatuses_custom_batch_request_entry_instance = AccountstatusesCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(AccountstatusesCustomBatchRequestEntry.to_json())

# convert the object into a dict
accountstatuses_custom_batch_request_entry_dict = accountstatuses_custom_batch_request_entry_instance.to_dict()
# create an instance of AccountstatusesCustomBatchRequestEntry from a dict
accountstatuses_custom_batch_request_entry_from_dict = AccountstatusesCustomBatchRequestEntry.from_dict(accountstatuses_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


