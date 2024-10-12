# AccounttaxCustomBatchRequestEntry

A batch entry encoding a single non-batch accounttax request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account for which to get/update account tax settings. | [optional] 
**account_tax** | [**AccountTax**](AccountTax.md) |  | [optional] 
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.accounttax_custom_batch_request_entry import AccounttaxCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccounttaxCustomBatchRequestEntry from a JSON string
accounttax_custom_batch_request_entry_instance = AccounttaxCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(AccounttaxCustomBatchRequestEntry.to_json())

# convert the object into a dict
accounttax_custom_batch_request_entry_dict = accounttax_custom_batch_request_entry_instance.to_dict()
# create an instance of AccounttaxCustomBatchRequestEntry from a dict
accounttax_custom_batch_request_entry_from_dict = AccounttaxCustomBatchRequestEntry.from_dict(accounttax_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


