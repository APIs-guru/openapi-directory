# RoleGrant

This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**helper_text_template** | **str** | Template that UI can use to provide helper text to customers. | [optional] 
**principal** | **str** | Prinicipal/Identity for whom the role need to assigned. | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**roles** | **List[str]** | List of roles that need to be granted. | [optional] 

## Example

```python
from openapi_client.models.role_grant import RoleGrant

# TODO update the JSON string below
json = "{}"
# create an instance of RoleGrant from a JSON string
role_grant_instance = RoleGrant.from_json(json)
# print the JSON string representation of the object
print(RoleGrant.to_json())

# convert the object into a dict
role_grant_dict = role_grant_instance.to_dict()
# create an instance of RoleGrant from a dict
role_grant_from_dict = RoleGrant.from_dict(role_grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


