# AccountsCustomBatchRequestEntry

A batch entry encoding a single non-batch accounts request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**account_id** | **str** | The ID of the targeted account. Only defined if the method is not &#x60;insert&#x60;. | [optional] 
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**force** | **bool** | Whether the account should be deleted if the account has offers. Only applicable if the method is &#x60;delete&#x60;. | [optional] 
**label_ids** | **List[str]** | Label IDs for the &#39;updatelabels&#39; request. | [optional] 
**link_request** | [**AccountsCustomBatchRequestEntryLinkRequest**](AccountsCustomBatchRequestEntryLinkRequest.md) |  | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;claimWebsite&#x60;\&quot; - \&quot;&#x60;delete&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;insert&#x60;\&quot; - \&quot;&#x60;link&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 
**overwrite** | **bool** | Only applicable if the method is &#x60;claimwebsite&#x60;. Indicates whether or not to take the claim from another account in case there is a conflict. | [optional] 
**view** | **str** | Controls which fields are visible. Only applicable if the method is &#39;get&#39;. | [optional] 

## Example

```python
from openapi_client.models.accounts_custom_batch_request_entry import AccountsCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsCustomBatchRequestEntry from a JSON string
accounts_custom_batch_request_entry_instance = AccountsCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(AccountsCustomBatchRequestEntry.to_json())

# convert the object into a dict
accounts_custom_batch_request_entry_dict = accounts_custom_batch_request_entry_instance.to_dict()
# create an instance of AccountsCustomBatchRequestEntry from a dict
accounts_custom_batch_request_entry_from_dict = AccountsCustomBatchRequestEntry.from_dict(accounts_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


