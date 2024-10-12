# AboutAdditionalRoleInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_sets** | [**List[AboutAdditionalRoleInfoInnerRoleSetsInner]**](AboutAdditionalRoleInfoInnerRoleSetsInner.md) | The supported additional roles per primary role. | [optional] 
**type** | **str** | The content type that this additional role info applies to. | [optional] 

## Example

```python
from openapi_client.models.about_additional_role_info_inner import AboutAdditionalRoleInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutAdditionalRoleInfoInner from a JSON string
about_additional_role_info_inner_instance = AboutAdditionalRoleInfoInner.from_json(json)
# print the JSON string representation of the object
print(AboutAdditionalRoleInfoInner.to_json())

# convert the object into a dict
about_additional_role_info_inner_dict = about_additional_role_info_inner_instance.to_dict()
# create an instance of AboutAdditionalRoleInfoInner from a dict
about_additional_role_info_inner_from_dict = AboutAdditionalRoleInfoInner.from_dict(about_additional_role_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


