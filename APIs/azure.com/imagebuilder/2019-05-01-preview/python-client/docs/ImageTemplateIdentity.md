# ImageTemplateIdentity

Identity for the image template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of identity used for the image template. The type &#39;None&#39; will remove any identities from the image template. | [optional] 
**user_assigned_identities** | [**Dict[str, ImageTemplateIdentityUserAssignedIdentitiesValue]**](ImageTemplateIdentityUserAssignedIdentitiesValue.md) | The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;. | [optional] 

## Example

```python
from openapi_client.models.image_template_identity import ImageTemplateIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateIdentity from a JSON string
image_template_identity_instance = ImageTemplateIdentity.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateIdentity.to_json())

# convert the object into a dict
image_template_identity_dict = image_template_identity_instance.to_dict()
# create an instance of ImageTemplateIdentity from a dict
image_template_identity_from_dict = ImageTemplateIdentity.from_dict(image_template_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


