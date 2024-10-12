# SchemaSettings

Settings for validating messages published against a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | Optional. The encoding of messages validated against &#x60;schema&#x60;. | [optional] 
**first_revision_id** | **str** | Optional. The minimum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against last_revision or any revision created before. | [optional] 
**last_revision_id** | **str** | Optional. The maximum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against first_revision or any revision created after. | [optional] 
**var_schema** | **str** | Required. The name of the schema that messages published should be validated against. Format is &#x60;projects/{project}/schemas/{schema}&#x60;. The value of this field will be &#x60;_deleted-schema_&#x60; if the schema has been deleted. | [optional] 

## Example

```python
from openapi_client.models.schema_settings import SchemaSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaSettings from a JSON string
schema_settings_instance = SchemaSettings.from_json(json)
# print the JSON string representation of the object
print(SchemaSettings.to_json())

# convert the object into a dict
schema_settings_dict = schema_settings_instance.to_dict()
# create an instance of SchemaSettings from a dict
schema_settings_from_dict = SchemaSettings.from_dict(schema_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


