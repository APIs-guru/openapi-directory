# GoogleChromePolicyVersionsV1PolicySchemaFieldDescription

Provides detailed information for a particular field that is part of a PolicySchema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | Output only. Client default if the policy is unset. | [optional] [readonly] 
**description** | **str** | Deprecated. Use name and field_description instead. The description for the field. | [optional] 
**var_field** | **str** | Output only. The name of the field for associated with this description. | [optional] [readonly] 
**field_constraints** | [**GoogleChromePolicyVersionsV1FieldConstraints**](GoogleChromePolicyVersionsV1FieldConstraints.md) |  | [optional] 
**field_dependencies** | [**List[GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies]**](GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies.md) | Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set. | [optional] [readonly] 
**field_description** | **str** | Output only. The description of the field. | [optional] [readonly] 
**input_constraint** | **str** | Output only. Any input constraints associated on the values for the field. | [optional] [readonly] 
**known_value_descriptions** | [**List[GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription]**](GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription.md) | Output only. If the field has a set of known values, this field will provide a description for these values. | [optional] [readonly] 
**name** | **str** | Output only. The name of the field. | [optional] [readonly] 
**nested_field_descriptions** | [**List[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]**](GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.md) | Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields. Fields are suggested to be displayed by the ordering in this list, not by field number. | [optional] [readonly] 
**required_items** | [**List[GoogleChromePolicyVersionsV1PolicySchemaRequiredItems]**](GoogleChromePolicyVersionsV1PolicySchemaRequiredItems.md) | Output only. Provides a list of fields that are required to be set if this field has a certain value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema_field_description import GoogleChromePolicyVersionsV1PolicySchemaFieldDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldDescription from a JSON string
google_chrome_policy_versions_v1_policy_schema_field_description_instance = GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_field_description_dict = google_chrome_policy_versions_v1_policy_schema_field_description_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldDescription from a dict
google_chrome_policy_versions_v1_policy_schema_field_description_from_dict = GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.from_dict(google_chrome_policy_versions_v1_policy_schema_field_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


