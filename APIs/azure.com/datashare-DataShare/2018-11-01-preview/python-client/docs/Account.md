# Account

An account data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity**](Identity.md) |  | 
**properties** | [**AccountProperties**](AccountProperties.md) |  | [optional] 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**location** | **str** | Location of the azure resource. | [optional] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags on the azure resource. | [optional] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


