# IntegrationAccountSchemaFilter

The integration account schema filter for odata query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_type** | [**SchemaType**](SchemaType.md) |  | 

## Example

```python
from openapi_client.models.integration_account_schema_filter import IntegrationAccountSchemaFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountSchemaFilter from a JSON string
integration_account_schema_filter_instance = IntegrationAccountSchemaFilter.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountSchemaFilter.to_json())

# convert the object into a dict
integration_account_schema_filter_dict = integration_account_schema_filter_instance.to_dict()
# create an instance of IntegrationAccountSchemaFilter from a dict
integration_account_schema_filter_from_dict = IntegrationAccountSchemaFilter.from_dict(integration_account_schema_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


