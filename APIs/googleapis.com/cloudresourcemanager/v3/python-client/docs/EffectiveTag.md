# EffectiveTag

An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inherited** | **bool** | Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource&#39;s ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false. | [optional] 
**namespaced_tag_key** | **str** | The namespaced name of the TagKey. Can be in the form &#x60;{organization_id}/{tag_key_short_name}&#x60; or &#x60;{project_id}/{tag_key_short_name}&#x60; or &#x60;{project_number}/{tag_key_short_name}&#x60;. | [optional] 
**namespaced_tag_value** | **str** | The namespaced name of the TagValue. Can be in the form &#x60;{organization_id}/{tag_key_short_name}/{tag_value_short_name}&#x60; or &#x60;{project_id}/{tag_key_short_name}/{tag_value_short_name}&#x60; or &#x60;{project_number}/{tag_key_short_name}/{tag_value_short_name}&#x60;. | [optional] 
**tag_key** | **str** | The name of the TagKey, in the format &#x60;tagKeys/{id}&#x60;, such as &#x60;tagKeys/123&#x60;. | [optional] 
**tag_key_parent_name** | **str** | The parent name of the tag key. Must be in the format &#x60;organizations/{organization_id}&#x60; or &#x60;projects/{project_number}&#x60; | [optional] 
**tag_value** | **str** | Resource name for TagValue in the format &#x60;tagValues/456&#x60;. | [optional] 

## Example

```python
from openapi_client.models.effective_tag import EffectiveTag

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveTag from a JSON string
effective_tag_instance = EffectiveTag.from_json(json)
# print the JSON string representation of the object
print(EffectiveTag.to_json())

# convert the object into a dict
effective_tag_dict = effective_tag_instance.to_dict()
# create an instance of EffectiveTag from a dict
effective_tag_from_dict = EffectiveTag.from_dict(effective_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


