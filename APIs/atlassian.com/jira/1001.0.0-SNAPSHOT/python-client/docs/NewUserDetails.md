# NewUserDetails

The user details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_keys** | **List[str]** | Deprecated, do not use. | [optional] 
**display_name** | **str** | This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account. | [optional] 
**email_address** | **str** | The email address for the user. | 
**key** | **str** | This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**name** | **str** | This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**password** | **str** | This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account. | [optional] 
**products** | **List[str]** | Products the new user has access to. Valid products are: jira-core, jira-servicedesk, jira-product-discovery, jira-software. If left empty, the user will get default product access. To create a user without product access, set this field to be an empty array. | [optional] 
**var_self** | **str** | The URL of the user. | [optional] [readonly] 

## Example

```python
from openapi_client.models.new_user_details import NewUserDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NewUserDetails from a JSON string
new_user_details_instance = NewUserDetails.from_json(json)
# print the JSON string representation of the object
print(NewUserDetails.to_json())

# convert the object into a dict
new_user_details_dict = new_user_details_instance.to_dict()
# create an instance of NewUserDetails from a dict
new_user_details_from_dict = NewUserDetails.from_dict(new_user_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


