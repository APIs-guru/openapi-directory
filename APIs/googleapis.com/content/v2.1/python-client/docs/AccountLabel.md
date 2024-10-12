# AccountLabel

Label assigned by CSS domain or CSS group to one of its sub-accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Immutable. The ID of account this label belongs to. | [optional] 
**description** | **str** | The description of this label. | [optional] 
**label_id** | **str** | Output only. The ID of the label. | [optional] [readonly] 
**label_type** | **str** | Output only. The type of this label. | [optional] [readonly] 
**name** | **str** | The display name of this label. | [optional] 

## Example

```python
from openapi_client.models.account_label import AccountLabel

# TODO update the JSON string below
json = "{}"
# create an instance of AccountLabel from a JSON string
account_label_instance = AccountLabel.from_json(json)
# print the JSON string representation of the object
print(AccountLabel.to_json())

# convert the object into a dict
account_label_dict = account_label_instance.to_dict()
# create an instance of AccountLabel from a dict
account_label_from_dict = AccountLabel.from_dict(account_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


