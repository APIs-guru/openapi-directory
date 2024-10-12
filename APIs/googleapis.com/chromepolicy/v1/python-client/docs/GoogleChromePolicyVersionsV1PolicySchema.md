# GoogleChromePolicyVersionsV1PolicySchema

Resource representing a policy schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_restrictions** | **List[str]** | Output only. Specific access restrictions related to this policy. | [optional] [readonly] 
**additional_target_key_names** | [**List[GoogleChromePolicyVersionsV1AdditionalTargetKeyName]**](GoogleChromePolicyVersionsV1AdditionalTargetKeyName.md) | Output only. Additional key names that will be used to identify the target of the policy value. When specifying a &#x60;policyTargetKey&#x60;, each of the additional keys specified here will have to be included in the &#x60;additionalTargetKeys&#x60; map. | [optional] [readonly] 
**category_title** | **str** | Title of the category in which a setting belongs. | [optional] 
**definition** | [**Proto2FileDescriptorProto**](Proto2FileDescriptorProto.md) |  | [optional] 
**field_descriptions** | [**List[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]**](GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.md) | Output only. Detailed description of each field that is part of the schema. Fields are suggested to be displayed by the ordering in this list, not by field number. | [optional] [readonly] 
**name** | **str** | Format: name&#x3D;customers/{customer}/policySchemas/{schema_namespace} | [optional] 
**notices** | [**List[GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription]**](GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription.md) | Output only. Special notice messages related to setting certain values in certain fields in the schema. | [optional] [readonly] 
**policy_api_lifecycle** | [**GoogleChromePolicyVersionsV1PolicyApiLifecycle**](GoogleChromePolicyVersionsV1PolicyApiLifecycle.md) |  | [optional] 
**policy_description** | **str** | Output only. Description about the policy schema for user consumption. | [optional] [readonly] 
**schema_name** | **str** | Output only. The fully qualified name of the policy schema. This value is used to fill the field &#x60;policy_schema&#x60; in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies. | [optional] [readonly] 
**support_uri** | **str** | Output only. URI to related support article for this schema. | [optional] [readonly] 
**supported_platforms** | **List[str]** | Output only. List indicates that the policy will only apply to devices/users on these platforms. | [optional] [readonly] 
**valid_target_resources** | **List[str]** | Output only. Information about applicable target resources for the policy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema import GoogleChromePolicyVersionsV1PolicySchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchema from a JSON string
google_chrome_policy_versions_v1_policy_schema_instance = GoogleChromePolicyVersionsV1PolicySchema.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchema.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_dict = google_chrome_policy_versions_v1_policy_schema_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchema from a dict
google_chrome_policy_versions_v1_policy_schema_from_dict = GoogleChromePolicyVersionsV1PolicySchema.from_dict(google_chrome_policy_versions_v1_policy_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


