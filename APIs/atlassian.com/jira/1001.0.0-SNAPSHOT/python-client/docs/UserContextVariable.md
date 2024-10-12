# UserContextVariable

A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user. | 
**type** | **str** | Type of custom context variable. | 

## Example

```python
from openapi_client.models.user_context_variable import UserContextVariable

# TODO update the JSON string below
json = "{}"
# create an instance of UserContextVariable from a JSON string
user_context_variable_instance = UserContextVariable.from_json(json)
# print the JSON string representation of the object
print(UserContextVariable.to_json())

# convert the object into a dict
user_context_variable_dict = user_context_variable_instance.to_dict()
# create an instance of UserContextVariable from a dict
user_context_variable_from_dict = UserContextVariable.from_dict(user_context_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


