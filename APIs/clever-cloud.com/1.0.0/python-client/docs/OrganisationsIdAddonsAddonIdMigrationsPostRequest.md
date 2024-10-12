# OrganisationsIdAddonsAddonIdMigrationsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **str** | Id of the new plan. E.g. \&quot;plan_acddc485-79c2-4c6b-a617-c92a06c0cb0b\&quot; | [optional] 
**region** | **str** | New region. E.g. \&quot;EU\&quot;, \&quot;US\&quot;, \&quot;Par2\&quot; | [optional] 

## Example

```python
from openapi_client.models.organisations_id_addons_addon_id_migrations_post_request import OrganisationsIdAddonsAddonIdMigrationsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationsIdAddonsAddonIdMigrationsPostRequest from a JSON string
organisations_id_addons_addon_id_migrations_post_request_instance = OrganisationsIdAddonsAddonIdMigrationsPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganisationsIdAddonsAddonIdMigrationsPostRequest.to_json())

# convert the object into a dict
organisations_id_addons_addon_id_migrations_post_request_dict = organisations_id_addons_addon_id_migrations_post_request_instance.to_dict()
# create an instance of OrganisationsIdAddonsAddonIdMigrationsPostRequest from a dict
organisations_id_addons_addon_id_migrations_post_request_from_dict = OrganisationsIdAddonsAddonIdMigrationsPostRequest.from_dict(organisations_id_addons_addon_id_migrations_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


