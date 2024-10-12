# UpdateOrganizationSamlRole200ResponseTagsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the SAML administrator on the tag | [optional] 
**tag** | **str** | The name of the tag | [optional] 

## Example

```python
from openapi_client.models.update_organization_saml_role200_response_tags_inner import UpdateOrganizationSamlRole200ResponseTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSamlRole200ResponseTagsInner from a JSON string
update_organization_saml_role200_response_tags_inner_instance = UpdateOrganizationSamlRole200ResponseTagsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSamlRole200ResponseTagsInner.to_json())

# convert the object into a dict
update_organization_saml_role200_response_tags_inner_dict = update_organization_saml_role200_response_tags_inner_instance.to_dict()
# create an instance of UpdateOrganizationSamlRole200ResponseTagsInner from a dict
update_organization_saml_role200_response_tags_inner_from_dict = UpdateOrganizationSamlRole200ResponseTagsInner.from_dict(update_organization_saml_role200_response_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


