# GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription

Provides special notice messages related to a particular value in a field that is part of a PolicySchema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_required** | **bool** | Output only. Whether the user needs to acknowledge the notice message before the value can be set. | [optional] [readonly] 
**var_field** | **str** | Output only. The field name associated with the notice. | [optional] [readonly] 
**notice_message** | **str** | Output only. The notice message associate with the value of the field. | [optional] [readonly] 
**notice_value** | **str** | Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_schema_notice_description import GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription from a JSON string
google_chrome_policy_versions_v1_policy_schema_notice_description_instance = GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_schema_notice_description_dict = google_chrome_policy_versions_v1_policy_schema_notice_description_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription from a dict
google_chrome_policy_versions_v1_policy_schema_notice_description_from_dict = GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription.from_dict(google_chrome_policy_versions_v1_policy_schema_notice_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


