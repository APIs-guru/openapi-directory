# GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies

The field and the value it must have for another field to be allowed to be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_field** | **str** | The source field which this field depends on. | [optional] 
**source_field_value** | **str** | The value which the source field must have for this field to be allowed to be set. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema_field_dependencies import GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies from a JSON string
google_chrome_policy_versions_v1_policy_schema_field_dependencies_instance = GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_field_dependencies_dict = google_chrome_policy_versions_v1_policy_schema_field_dependencies_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies from a dict
google_chrome_policy_versions_v1_policy_schema_field_dependencies_from_dict = GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies.from_dict(google_chrome_policy_versions_v1_policy_schema_field_dependencies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


