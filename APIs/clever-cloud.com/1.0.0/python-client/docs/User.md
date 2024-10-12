# User

A user representation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the user | 
**admin** | **bool** | Is the user an administrator ? | [default to False]
**avatar** | **str** | The location of the user&#39;s avatar | 
**can_pay** | **bool** | Does the user can pay ? | [default to False]
**city** | **str** | The city of the user | 
**country** | **str** | The country of the user | 
**creation_date** | **int** | The creation timestamp of the user | 
**email** | **str** | The email of the user | 
**email_validated** | **bool** | Does the user email is validate | [default to False]
**has_password** | **bool** |  | [optional] [default to False]
**id** | **str** | The id of the user : &#x60;user_${uuid}&#x60; | 
**lang** | **str** | The lang of the user | 
**name** | **str** | The name of the user | 
**oauth_apps** | **List[str]** | The list of token oauth | 
**phone** | **str** | The phone of the user | 
**preferred_mfa** | **str** |  | [optional] 
**zipcode** | **str** | The zipcode of the user | 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


