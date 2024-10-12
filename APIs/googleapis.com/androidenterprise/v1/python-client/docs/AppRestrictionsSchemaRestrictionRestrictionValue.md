# AppRestrictionsSchemaRestrictionRestrictionValue

A typed value for the restriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the value being provided. | [optional] 
**value_bool** | **bool** | The boolean value - this will only be present if type is bool. | [optional] 
**value_integer** | **int** | The integer value - this will only be present if type is integer. | [optional] 
**value_multiselect** | **List[str]** | The list of string values - this will only be present if type is multiselect. | [optional] 
**value_string** | **str** | The string value - this will be present for types string, choice and hidden. | [optional] 

## Example

```python
from openapi_client.models.app_restrictions_schema_restriction_restriction_value import AppRestrictionsSchemaRestrictionRestrictionValue

# TODO update the JSON string below
json = "{}"
# create an instance of AppRestrictionsSchemaRestrictionRestrictionValue from a JSON string
app_restrictions_schema_restriction_restriction_value_instance = AppRestrictionsSchemaRestrictionRestrictionValue.from_json(json)
# print the JSON string representation of the object
print(AppRestrictionsSchemaRestrictionRestrictionValue.to_json())

# convert the object into a dict
app_restrictions_schema_restriction_restriction_value_dict = app_restrictions_schema_restriction_restriction_value_instance.to_dict()
# create an instance of AppRestrictionsSchemaRestrictionRestrictionValue from a dict
app_restrictions_schema_restriction_restriction_value_from_dict = AppRestrictionsSchemaRestrictionRestrictionValue.from_dict(app_restrictions_schema_restriction_restriction_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


