# AccountsUpdateLabelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsUpdateLabelsResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accounts_update_labels_response import AccountsUpdateLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsUpdateLabelsResponse from a JSON string
accounts_update_labels_response_instance = AccountsUpdateLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsUpdateLabelsResponse.to_json())

# convert the object into a dict
accounts_update_labels_response_dict = accounts_update_labels_response_instance.to_dict()
# create an instance of AccountsUpdateLabelsResponse from a dict
accounts_update_labels_response_from_dict = AccountsUpdateLabelsResponse.from_dict(accounts_update_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


