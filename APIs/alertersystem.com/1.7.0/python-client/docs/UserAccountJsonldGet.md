# UserAccountJsonldGet

The UserAccount resource contains basic information regarding the authenticated user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**account_level_code** | **str** | The account level of the user. | [optional] 
**credits_overage_percent_trip_switch** | **int** | If the credits consumed in the billing period are this percentage above the account plan&#39;s included credits, cease further consumption of credits until the end of the billing period. Any integer between 1 and 1,000. Optional. Leave blank for no limit. | [optional] 
**email** | **str** | The email address of the user. | [optional] 
**first_name** | **str** | The first name of the user. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] 
**is_delinquent** | **bool** | Whether the user account has overdue payments. | [optional] 
**last_name** | **str** | The last name of the user. | [optional] 
**timezone_code** | **str** | The timezone of the user. | [optional] 

## Example

```python
from openapi_client.models.user_account_jsonld_get import UserAccountJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccountJsonldGet from a JSON string
user_account_jsonld_get_instance = UserAccountJsonldGet.from_json(json)
# print the JSON string representation of the object
print(UserAccountJsonldGet.to_json())

# convert the object into a dict
user_account_jsonld_get_dict = user_account_jsonld_get_instance.to_dict()
# create an instance of UserAccountJsonldGet from a dict
user_account_jsonld_get_from_dict = UserAccountJsonldGet.from_dict(user_account_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


