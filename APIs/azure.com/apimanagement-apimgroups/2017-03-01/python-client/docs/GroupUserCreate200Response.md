# GroupUserCreate200Response

User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the entity. | [optional] 
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**groups** | [**List[GroupUserCreate200ResponseAllOfGroupsInner]**](GroupUserCreate200ResponseAllOfGroupsInner.md) | Collection of groups user is part of. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**identities** | [**List[GroupUserCreate200ResponseAllOfAllOfIdentitiesInner]**](GroupUserCreate200ResponseAllOfAllOfIdentitiesInner.md) | Collection of user identities. | [optional] [readonly] 
**note** | **str** | Optional note about a user set by the administrator. | [optional] 
**state** | **str** | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.group_user_create200_response import GroupUserCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserCreate200Response from a JSON string
group_user_create200_response_instance = GroupUserCreate200Response.from_json(json)
# print the JSON string representation of the object
print(GroupUserCreate200Response.to_json())

# convert the object into a dict
group_user_create200_response_dict = group_user_create200_response_instance.to_dict()
# create an instance of GroupUserCreate200Response from a dict
group_user_create200_response_from_dict = GroupUserCreate200Response.from_dict(group_user_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


