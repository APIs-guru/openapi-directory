# AccountsUpdateLabelsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_ids** | **List[str]** | The IDs of labels that should be assigned to the account. | [optional] 

## Example

```python
from openapi_client.models.accounts_update_labels_request import AccountsUpdateLabelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsUpdateLabelsRequest from a JSON string
accounts_update_labels_request_instance = AccountsUpdateLabelsRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsUpdateLabelsRequest.to_json())

# convert the object into a dict
accounts_update_labels_request_dict = accounts_update_labels_request_instance.to_dict()
# create an instance of AccountsUpdateLabelsRequest from a dict
accounts_update_labels_request_from_dict = AccountsUpdateLabelsRequest.from_dict(accounts_update_labels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


