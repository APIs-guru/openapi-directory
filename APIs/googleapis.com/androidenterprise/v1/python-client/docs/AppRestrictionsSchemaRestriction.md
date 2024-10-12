# AppRestrictionsSchemaRestriction

A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | [**AppRestrictionsSchemaRestrictionRestrictionValue**](AppRestrictionsSchemaRestrictionRestrictionValue.md) |  | [optional] 
**description** | **str** | A longer description of the restriction, giving more detail of what it affects. | [optional] 
**entry** | **List[str]** | For choice or multiselect restrictions, the list of possible entries&#39; human-readable names. | [optional] 
**entry_value** | **List[str]** | For choice or multiselect restrictions, the list of possible entries&#39; machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction. | [optional] 
**key** | **str** | The unique key that the product uses to identify the restriction, e.g. \&quot;com.google.android.gm.fieldname\&quot;. | [optional] 
**nested_restriction** | [**List[AppRestrictionsSchemaRestriction]**](AppRestrictionsSchemaRestriction.md) | For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep. | [optional] 
**restriction_type** | **str** | The type of the restriction. | [optional] 
**title** | **str** | The name of the restriction. | [optional] 

## Example

```python
from openapi_client.models.app_restrictions_schema_restriction import AppRestrictionsSchemaRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of AppRestrictionsSchemaRestriction from a JSON string
app_restrictions_schema_restriction_instance = AppRestrictionsSchemaRestriction.from_json(json)
# print the JSON string representation of the object
print(AppRestrictionsSchemaRestriction.to_json())

# convert the object into a dict
app_restrictions_schema_restriction_dict = app_restrictions_schema_restriction_instance.to_dict()
# create an instance of AppRestrictionsSchemaRestriction from a dict
app_restrictions_schema_restriction_from_dict = AppRestrictionsSchemaRestriction.from_dict(app_restrictions_schema_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


