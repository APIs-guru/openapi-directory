# UserContractProperties

User profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**groups** | **List[object]** | Collection of groups user is part of. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**identities** | [**List[UserIdentityContract]**](UserIdentityContract.md) | Collection of user identities. | [optional] 
**note** | **str** | Optional note about a user set by the administrator. | [optional] 
**state** | **str** | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.user_contract_properties import UserContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserContractProperties from a JSON string
user_contract_properties_instance = UserContractProperties.from_json(json)
# print the JSON string representation of the object
print(UserContractProperties.to_json())

# convert the object into a dict
user_contract_properties_dict = user_contract_properties_instance.to_dict()
# create an instance of UserContractProperties from a dict
user_contract_properties_from_dict = UserContractProperties.from_dict(user_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


