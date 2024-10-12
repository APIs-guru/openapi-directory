# TableFieldSchemaPolicyTags

Optional. The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | A list of policy tag resource names. For example, \&quot;projects/1/locations/eu/taxonomies/2/policyTags/3\&quot;. At most 1 policy tag is currently allowed. | [optional] 

## Example

```python
from openapi_client.models.table_field_schema_policy_tags import TableFieldSchemaPolicyTags

# TODO update the JSON string below
json = "{}"
# create an instance of TableFieldSchemaPolicyTags from a JSON string
table_field_schema_policy_tags_instance = TableFieldSchemaPolicyTags.from_json(json)
# print the JSON string representation of the object
print(TableFieldSchemaPolicyTags.to_json())

# convert the object into a dict
table_field_schema_policy_tags_dict = table_field_schema_policy_tags_instance.to_dict()
# create an instance of TableFieldSchemaPolicyTags from a dict
table_field_schema_policy_tags_from_dict = TableFieldSchemaPolicyTags.from_dict(table_field_schema_policy_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


