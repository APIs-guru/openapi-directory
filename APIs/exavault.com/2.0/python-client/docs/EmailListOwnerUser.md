# EmailListOwnerUser

Information for user who owns the email list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RelationshipData**](RelationshipData.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_list_owner_user import EmailListOwnerUser

# TODO update the JSON string below
json = "{}"
# create an instance of EmailListOwnerUser from a JSON string
email_list_owner_user_instance = EmailListOwnerUser.from_json(json)
# print the JSON string representation of the object
print(EmailListOwnerUser.to_json())

# convert the object into a dict
email_list_owner_user_dict = email_list_owner_user_instance.to_dict()
# create an instance of EmailListOwnerUser from a dict
email_list_owner_user_from_dict = EmailListOwnerUser.from_dict(email_list_owner_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


