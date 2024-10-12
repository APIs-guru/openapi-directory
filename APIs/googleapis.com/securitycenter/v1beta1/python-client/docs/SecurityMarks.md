# SecurityMarks

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_name** | **str** | The canonical name of the marks. Examples: \&quot;organizations/{organization_id}/assets/{asset_id}/securityMarks\&quot; \&quot;folders/{folder_id}/assets/{asset_id}/securityMarks\&quot; \&quot;projects/{project_number}/assets/{asset_id}/securityMarks\&quot; \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks\&quot; \&quot;folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks\&quot; \&quot;projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks\&quot; | [optional] 
**marks** | **Dict[str, str]** | Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) | [optional] 
**name** | **str** | The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: \&quot;organizations/{organization_id}/assets/{asset_id}/securityMarks\&quot; \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks\&quot;. | [optional] 

## Example

```python
from openapi_client.models.security_marks import SecurityMarks

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityMarks from a JSON string
security_marks_instance = SecurityMarks.from_json(json)
# print the JSON string representation of the object
print(SecurityMarks.to_json())

# convert the object into a dict
security_marks_dict = security_marks_instance.to_dict()
# create an instance of SecurityMarks from a dict
security_marks_from_dict = SecurityMarks.from_dict(security_marks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


