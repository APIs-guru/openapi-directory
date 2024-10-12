# AccountRef

JSON template for a linked account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link for this account. | [optional] 
**id** | **str** | Account ID. | [optional] 
**kind** | **str** | Analytics account reference. | [optional] [default to 'analytics#accountRef']
**name** | **str** | Account name. | [optional] 

## Example

```python
from openapi_client.models.account_ref import AccountRef

# TODO update the JSON string below
json = "{}"
# create an instance of AccountRef from a JSON string
account_ref_instance = AccountRef.from_json(json)
# print the JSON string representation of the object
print(AccountRef.to_json())

# convert the object into a dict
account_ref_dict = account_ref_instance.to_dict()
# create an instance of AccountRef from a dict
account_ref_from_dict = AccountRef.from_dict(account_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


