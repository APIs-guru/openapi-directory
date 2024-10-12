# TagKey

A TagKey, used to group a set of TagValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time. | [optional] [readonly] 
**description** | **str** | Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write. | [optional] 
**etag** | **str** | Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details. | [optional] 
**name** | **str** | Immutable. The resource name for a TagKey. Must be in the format &#x60;tagKeys/{tag_key_id}&#x60;, where &#x60;tag_key_id&#x60; is the generated numeric id for the TagKey. | [optional] 
**namespaced_name** | **str** | Output only. Immutable. Namespaced name of the TagKey. | [optional] [readonly] 
**parent** | **str** | Immutable. The resource name of the TagKey&#39;s parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form &#x60;organizations/{org_id}&#x60;. For a TagKey parented by a Project, its parent can be in the form &#x60;projects/{project_id}&#x60; or &#x60;projects/{project_number}&#x60;. | [optional] 
**purpose** | **str** | Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set. | [optional] 
**purpose_data** | **Dict[str, str]** | Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for &#x60;Purpose&#x60; for formatting of this field. Purpose data cannot be changed once set. | [optional] 
**short_name** | **str** | Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**update_time** | **str** | Output only. Update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_key import TagKey

# TODO update the JSON string below
json = "{}"
# create an instance of TagKey from a JSON string
tag_key_instance = TagKey.from_json(json)
# print the JSON string representation of the object
print(TagKey.to_json())

# convert the object into a dict
tag_key_dict = tag_key_instance.to_dict()
# create an instance of TagKey from a dict
tag_key_from_dict = TagKey.from_dict(tag_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


