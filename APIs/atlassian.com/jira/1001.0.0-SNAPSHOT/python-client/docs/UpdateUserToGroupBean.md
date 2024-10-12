# UpdateUserToGroupBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
**name** | **str** | This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

## Example

```python
from openapi_client.models.update_user_to_group_bean import UpdateUserToGroupBean

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserToGroupBean from a JSON string
update_user_to_group_bean_instance = UpdateUserToGroupBean.from_json(json)
# print the JSON string representation of the object
print(UpdateUserToGroupBean.to_json())

# convert the object into a dict
update_user_to_group_bean_dict = update_user_to_group_bean_instance.to_dict()
# create an instance of UpdateUserToGroupBean from a dict
update_user_to_group_bean_from_dict = UpdateUserToGroupBean.from_dict(update_user_to_group_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


