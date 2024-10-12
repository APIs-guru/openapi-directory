# UserContract

User profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**id** | **str** | User identifier path. | [optional] 
**identities** | [**List[UserIdentityContract]**](UserIdentityContract.md) | Collection of user identities. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**note** | **str** | Administrator&#39;s note about given user. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**state** | **str** | User state. | [optional] 

## Example

```python
from openapi_client.models.user_contract import UserContract

# TODO update the JSON string below
json = "{}"
# create an instance of UserContract from a JSON string
user_contract_instance = UserContract.from_json(json)
# print the JSON string representation of the object
print(UserContract.to_json())

# convert the object into a dict
user_contract_dict = user_contract_instance.to_dict()
# create an instance of UserContract from a dict
user_contract_from_dict = UserContract.from_dict(user_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


