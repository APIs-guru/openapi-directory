# UserPublicSummary

Public User details summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_role** | [**ClassRoles**](ClassRoles.md) |  | [optional] 
**html_url** | **str** | Link to user profile (for Indiv. users only) | [optional] 
**organization** | **str** | Organization ID (for Edu users only) | [optional] 
**organization_role** | [**OrganizationRoles**](OrganizationRoles.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_public_summary import UserPublicSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UserPublicSummary from a JSON string
user_public_summary_instance = UserPublicSummary.from_json(json)
# print the JSON string representation of the object
print(UserPublicSummary.to_json())

# convert the object into a dict
user_public_summary_dict = user_public_summary_instance.to_dict()
# create an instance of UserPublicSummary from a dict
user_public_summary_from_dict = UserPublicSummary.from_dict(user_public_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


