# Organizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **str** | a string with a length from 0 to 16384 | [optional] 
**display_name** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 
**name** | **str** | a string with a length from 0 to 16384 | [optional] 
**prefs_associated_domain** | **str** | The google apps domain to link this org to. | [optional] 
**prefs_board_visibility_restrict_org** | **str** | One of: admin, none or org | [optional] 
**prefs_board_visibility_restrict_private** | **str** | One of: admin, none or org | [optional] 
**prefs_board_visibility_restrict_public** | **str** | One of: admin, none or org | [optional] 
**prefs_external_members_disabled** | **str** |  true or false | [optional] 
**prefs_google_apps_version** | **str** | a number from 1 to 2 | [optional] 
**prefs_org_invite_restrict** | **str** | An email address with optional expansion tokens | [optional] 
**prefs_permission_level** | **str** | One of: private or public | [optional] 
**website** | **str** | A URL starting with http:// or https:// or null | [optional] 

## Example

```python
from openapi_client.models.organizations import Organizations

# TODO update the JSON string below
json = "{}"
# create an instance of Organizations from a JSON string
organizations_instance = Organizations.from_json(json)
# print the JSON string representation of the object
print(Organizations.to_json())

# convert the object into a dict
organizations_dict = organizations_instance.to_dict()
# create an instance of Organizations from a dict
organizations_from_dict = Organizations.from_dict(organizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


