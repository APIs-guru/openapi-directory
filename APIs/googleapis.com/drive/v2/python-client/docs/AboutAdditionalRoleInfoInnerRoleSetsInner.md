# AboutAdditionalRoleInfoInnerRoleSetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_roles** | **List[str]** | The supported additional roles with the primary role. | [optional] 
**primary_role** | **str** | A primary permission role. | [optional] 

## Example

```python
from openapi_client.models.about_additional_role_info_inner_role_sets_inner import AboutAdditionalRoleInfoInnerRoleSetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutAdditionalRoleInfoInnerRoleSetsInner from a JSON string
about_additional_role_info_inner_role_sets_inner_instance = AboutAdditionalRoleInfoInnerRoleSetsInner.from_json(json)
# print the JSON string representation of the object
print(AboutAdditionalRoleInfoInnerRoleSetsInner.to_json())

# convert the object into a dict
about_additional_role_info_inner_role_sets_inner_dict = about_additional_role_info_inner_role_sets_inner_instance.to_dict()
# create an instance of AboutAdditionalRoleInfoInnerRoleSetsInner from a dict
about_additional_role_info_inner_role_sets_inner_from_dict = AboutAdditionalRoleInfoInnerRoleSetsInner.from_dict(about_additional_role_info_inner_role_sets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


