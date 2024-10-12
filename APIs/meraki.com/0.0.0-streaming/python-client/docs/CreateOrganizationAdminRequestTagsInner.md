# CreateOrganizationAdminRequestTagsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the dashboard administrator on the tag | 
**tag** | **str** | The name of the tag | 

## Example

```python
from openapi_client.models.create_organization_admin_request_tags_inner import CreateOrganizationAdminRequestTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdminRequestTagsInner from a JSON string
create_organization_admin_request_tags_inner_instance = CreateOrganizationAdminRequestTagsInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdminRequestTagsInner.to_json())

# convert the object into a dict
create_organization_admin_request_tags_inner_dict = create_organization_admin_request_tags_inner_instance.to_dict()
# create an instance of CreateOrganizationAdminRequestTagsInner from a dict
create_organization_admin_request_tags_inner_from_dict = CreateOrganizationAdminRequestTagsInner.from_dict(create_organization_admin_request_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


