# GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription

Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. Additional description for this value. | [optional] [readonly] 
**field_dependencies** | [**List[GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies]**](GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies.md) | Output only. Field conditions required for this value to be valid. | [optional] [readonly] 
**value** | **str** | Output only. The string represenstation of the value that can be set for the field. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema_field_known_value_description import GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription from a JSON string
google_chrome_policy_versions_v1_policy_schema_field_known_value_description_instance = GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_field_known_value_description_dict = google_chrome_policy_versions_v1_policy_schema_field_known_value_description_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription from a dict
google_chrome_policy_versions_v1_policy_schema_field_known_value_description_from_dict = GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription.from_dict(google_chrome_policy_versions_v1_policy_schema_field_known_value_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


