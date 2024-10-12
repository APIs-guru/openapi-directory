# EmailListRelationships

Related record summary info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_user** | [**EmailListOwnerUser**](EmailListOwnerUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_list_relationships import EmailListRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of EmailListRelationships from a JSON string
email_list_relationships_instance = EmailListRelationships.from_json(json)
# print the JSON string representation of the object
print(EmailListRelationships.to_json())

# convert the object into a dict
email_list_relationships_dict = email_list_relationships_instance.to_dict()
# create an instance of EmailListRelationships from a dict
email_list_relationships_from_dict = EmailListRelationships.from_dict(email_list_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


