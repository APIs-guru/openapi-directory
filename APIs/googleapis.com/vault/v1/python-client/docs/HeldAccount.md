# HeldAccount

An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). | [optional] 
**email** | **str** | The primary email address of the account. If used as an input, this takes precedence over **accountId**. | [optional] 
**first_name** | **str** | Output only. The first name of the account holder. | [optional] 
**hold_time** | **str** | Output only. When the account was put on hold. | [optional] 
**last_name** | **str** | Output only. The last name of the account holder. | [optional] 

## Example

```python
from openapi_client.models.held_account import HeldAccount

# TODO update the JSON string below
json = "{}"
# create an instance of HeldAccount from a JSON string
held_account_instance = HeldAccount.from_json(json)
# print the JSON string representation of the object
print(HeldAccount.to_json())

# convert the object into a dict
held_account_dict = held_account_instance.to_dict()
# create an instance of HeldAccount from a dict
held_account_from_dict = HeldAccount.from_dict(held_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


