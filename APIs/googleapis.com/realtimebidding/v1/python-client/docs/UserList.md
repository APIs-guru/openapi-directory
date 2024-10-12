# UserList

Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for the user list. | [optional] 
**display_name** | **str** | Required. Display name of the user list. This must be unique across all user lists for a given account. | [optional] 
**membership_duration_days** | **str** | Required. The number of days a user&#39;s cookie stays on the user list. The field must be between 0 and 540 inclusive. | [optional] 
**name** | **str** | Output only. Name of the user list that must follow the pattern &#x60;buyers/{buyer}/userLists/{user_list}&#x60;, where &#x60;{buyer}&#x60; represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, &#x60;{buyer}&#x60; represents the account ID of the child seat buyer. &#x60;{user_list}&#x60; is an int64 identifier assigned by Google to uniquely identify a user list. | [optional] [readonly] 
**status** | **str** | Output only. The status of the user list. A new user list starts out as open. | [optional] [readonly] 
**url_restriction** | [**UrlRestriction**](UrlRestriction.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_list import UserList

# TODO update the JSON string below
json = "{}"
# create an instance of UserList from a JSON string
user_list_instance = UserList.from_json(json)
# print the JSON string representation of the object
print(UserList.to_json())

# convert the object into a dict
user_list_dict = user_list_instance.to_dict()
# create an instance of UserList from a dict
user_list_from_dict = UserList.from_dict(user_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


