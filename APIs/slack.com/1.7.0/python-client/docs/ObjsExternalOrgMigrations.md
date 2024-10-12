# ObjsExternalOrgMigrations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | [**List[ObjsExternalOrgMigrationsCurrentInner]**](ObjsExternalOrgMigrationsCurrentInner.md) |  | 
**date_updated** | **int** |  | 

## Example

```python
from openapi_client.models.objs_external_org_migrations import ObjsExternalOrgMigrations

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsExternalOrgMigrations from a JSON string
objs_external_org_migrations_instance = ObjsExternalOrgMigrations.from_json(json)
# print the JSON string representation of the object
print(ObjsExternalOrgMigrations.to_json())

# convert the object into a dict
objs_external_org_migrations_dict = objs_external_org_migrations_instance.to_dict()
# create an instance of ObjsExternalOrgMigrations from a dict
objs_external_org_migrations_from_dict = ObjsExternalOrgMigrations.from_dict(objs_external_org_migrations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


