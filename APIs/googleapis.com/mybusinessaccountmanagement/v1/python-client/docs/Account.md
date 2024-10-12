# Account

An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Required. The name of the account. For an account of type &#x60;PERSONAL&#x60;, this is the first and last name of the user account. | [optional] 
**account_number** | **str** | Output only. Account reference number if provisioned. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name, in the format &#x60;accounts/{account_id}&#x60;. | [optional] 
**organization_info** | [**OrganizationInfo**](OrganizationInfo.md) |  | [optional] 
**permission_level** | **str** | Output only. Specifies the permission level the user has for this account. | [optional] [readonly] 
**primary_owner** | **str** | Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form &#x60;accounts/{account_id}&#x60;. | [optional] 
**role** | **str** | Output only. Specifies the AccountRole of this account. | [optional] [readonly] 
**type** | **str** | Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API. | [optional] 
**verification_state** | **str** | Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. | [optional] [readonly] 
**vetted_state** | **str** | Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method. | [optional] [readonly] 

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


