# TagValue

A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time. | [optional] [readonly] 
**description** | **str** | Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write. | [optional] 
**etag** | **str** | Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details. | [optional] 
**name** | **str** | Immutable. Resource name for TagValue in the format &#x60;tagValues/456&#x60;. | [optional] 
**namespaced_name** | **str** | Output only. The namespaced name of the TagValue. Can be in the form &#x60;{organization_id}/{tag_key_short_name}/{tag_value_short_name}&#x60; or &#x60;{project_id}/{tag_key_short_name}/{tag_value_short_name}&#x60; or &#x60;{project_number}/{tag_key_short_name}/{tag_value_short_name}&#x60;. | [optional] [readonly] 
**parent** | **str** | Immutable. The resource name of the new TagValue&#39;s parent TagKey. Must be of the form &#x60;tagKeys/{tag_key_id}&#x60;. | [optional] 
**short_name** | **str** | Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**update_time** | **str** | Output only. Update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_value import TagValue

# TODO update the JSON string below
json = "{}"
# create an instance of TagValue from a JSON string
tag_value_instance = TagValue.from_json(json)
# print the JSON string representation of the object
print(TagValue.to_json())

# convert the object into a dict
tag_value_dict = tag_value_instance.to_dict()
# create an instance of TagValue from a dict
tag_value_from_dict = TagValue.from_dict(tag_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


