# UserCollectionItem

A user object.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the user is active | [optional] [readonly] 
**changed_on** | **str** | The date user was changed | [optional] [readonly] 
**created_on** | **str** | The date user was created | [optional] [readonly] 
**email** | **str** | The user&#39;s email.  *Changed in version 2.2.0*&amp;#58; A minimum character length requirement (&#39;minLength&#39;) is added.  | [optional] 
**failed_login_count** | **int** | The number of times the login failed | [optional] [readonly] 
**first_name** | **str** | The user&#39;s first name.  *Changed in version 2.4.0*&amp;#58; The requirement for this to be non-empty was removed.  | [optional] 
**last_login** | **str** | The last user login | [optional] [readonly] 
**last_name** | **str** | The user&#39;s last name.  *Changed in version 2.4.0*&amp;#58; The requirement for this to be non-empty was removed.  | [optional] 
**login_count** | **int** | The login count | [optional] [readonly] 
**roles** | [**List[UserCollectionItemRolesInner]**](UserCollectionItemRolesInner.md) | User roles.  *Changed in version 2.2.0*&amp;#58; Field is no longer read-only.  | [optional] 
**username** | **str** | The username.  *Changed in version 2.2.0*&amp;#58; A minimum character length requirement (&#39;minLength&#39;) is added.  | [optional] 

## Example

```python
from openapi_client.models.user_collection_item import UserCollectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of UserCollectionItem from a JSON string
user_collection_item_instance = UserCollectionItem.from_json(json)
# print the JSON string representation of the object
print(UserCollectionItem.to_json())

# convert the object into a dict
user_collection_item_dict = user_collection_item_instance.to_dict()
# create an instance of UserCollectionItem from a dict
user_collection_item_from_dict = UserCollectionItem.from_dict(user_collection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


