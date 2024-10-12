# Account

An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the account. *Note:* For an account with AccountType &#x60;PERSONAL&#x60;, this is the first and last name of the user account. | [optional] 
**account_number** | **str** | Account reference number if provisioned. | [optional] 
**name** | **str** | The resource name, in the format &#x60;accounts/{account_id}&#x60;. | [optional] 
**organization_info** | [**OrganizationInfo**](OrganizationInfo.md) |  | [optional] 
**permission_level** | **str** | Output only. Specifies the PermissionLevel the caller has for this account. | [optional] 
**role** | **str** | Output only. Specifies the AccountRole the caller has for this account. | [optional] 
**state** | [**AccountState**](AccountState.md) |  | [optional] 
**type** | **str** | Output only. Specifies the AccountType of this account. | [optional] 

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


