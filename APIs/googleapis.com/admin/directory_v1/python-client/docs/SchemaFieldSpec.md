# SchemaFieldSpec

You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display Name of the field. | [optional] 
**etag** | **str** | The ETag of the field. | [optional] 
**field_id** | **str** | The unique identifier of the field (Read-only) | [optional] 
**field_name** | **str** | The name of the field. | [optional] 
**field_type** | **str** | The type of the field. | [optional] 
**indexed** | **bool** | Boolean specifying whether the field is indexed or not. Default: &#x60;true&#x60;. | [optional] [default to True]
**kind** | **str** | The kind of resource this is. For schema fields this is always &#x60;admin#directory#schema#fieldspec&#x60;. | [optional] [default to 'admin#directory#schema#fieldspec']
**multi_valued** | **bool** | A boolean specifying whether this is a multi-valued field or not. Default: &#x60;false&#x60;. | [optional] 
**numeric_indexing_spec** | [**SchemaFieldSpecNumericIndexingSpec**](SchemaFieldSpecNumericIndexingSpec.md) |  | [optional] 
**read_access_type** | **str** | Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected. | [optional] [default to 'ALL_DOMAIN_USERS']

## Example

```python
from openapi_client.models.schema_field_spec import SchemaFieldSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaFieldSpec from a JSON string
schema_field_spec_instance = SchemaFieldSpec.from_json(json)
# print the JSON string representation of the object
print(SchemaFieldSpec.to_json())

# convert the object into a dict
schema_field_spec_dict = schema_field_spec_instance.to_dict()
# create an instance of SchemaFieldSpec from a dict
schema_field_spec_from_dict = SchemaFieldSpec.from_dict(schema_field_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


