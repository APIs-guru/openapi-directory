# AppRestrictionsSchema

Represents the list of app restrictions available to be pre-configured for the product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Deprecated. | [optional] 
**restrictions** | [**List[AppRestrictionsSchemaRestriction]**](AppRestrictionsSchemaRestriction.md) | The set of restrictions that make up this schema. | [optional] 

## Example

```python
from openapi_client.models.app_restrictions_schema import AppRestrictionsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppRestrictionsSchema from a JSON string
app_restrictions_schema_instance = AppRestrictionsSchema.from_json(json)
# print the JSON string representation of the object
print(AppRestrictionsSchema.to_json())

# convert the object into a dict
app_restrictions_schema_dict = app_restrictions_schema_instance.to_dict()
# create an instance of AppRestrictionsSchema from a dict
app_restrictions_schema_from_dict = AppRestrictionsSchema.from_dict(app_restrictions_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


