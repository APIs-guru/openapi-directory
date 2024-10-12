# ImageTemplateIdentityUserAssignedIdentitiesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of user assigned identity. | [optional] [readonly] 
**principal_id** | **str** | The principal id of user assigned identity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_template_identity_user_assigned_identities_value import ImageTemplateIdentityUserAssignedIdentitiesValue

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateIdentityUserAssignedIdentitiesValue from a JSON string
image_template_identity_user_assigned_identities_value_instance = ImageTemplateIdentityUserAssignedIdentitiesValue.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateIdentityUserAssignedIdentitiesValue.to_json())

# convert the object into a dict
image_template_identity_user_assigned_identities_value_dict = image_template_identity_user_assigned_identities_value_instance.to_dict()
# create an instance of ImageTemplateIdentityUserAssignedIdentitiesValue from a dict
image_template_identity_user_assigned_identities_value_from_dict = ImageTemplateIdentityUserAssignedIdentitiesValue.from_dict(image_template_identity_user_assigned_identities_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


