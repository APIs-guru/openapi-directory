# Group

A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_group_keys** | [**List[EntityKey]**](EntityKey.md) | Output only. Additional group keys associated with the Group. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the &#x60;Group&#x60; was created. | [optional] [readonly] 
**description** | **str** | An extended description to help users determine the purpose of a &#x60;Group&#x60;. Must not be longer than 4,096 characters. | [optional] 
**display_name** | **str** | The display name of the &#x60;Group&#x60;. | [optional] 
**dynamic_group_metadata** | [**DynamicGroupMetadata**](DynamicGroupMetadata.md) |  | [optional] 
**group_key** | [**EntityKey**](EntityKey.md) |  | [optional] 
**labels** | **Dict[str, str]** | Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of &#x60;cloudidentity.googleapis.com/groups.discussion_forum&#x60; and an empty value. Existing Google Groups can have an additional label with a key of &#x60;cloudidentity.googleapis.com/groups.security&#x60; and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of &#x60;cloudidentity.googleapis.com/groups.dynamic&#x60;. Identity-mapped groups for Cloud Search have a label with a key of &#x60;system/groups/external&#x60; and an empty value. | [optional] 
**name** | **str** | Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the &#x60;Group&#x60;. Shall be of the form &#x60;groups/{group_id}&#x60;. | [optional] [readonly] 
**parent** | **str** | Required. Immutable. The resource name of the entity under which this &#x60;Group&#x60; resides in the Cloud Identity resource hierarchy. Must be of the form &#x60;identitysources/{identity_source}&#x60; for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or &#x60;customers/{customer_id}&#x60; for Google Groups. The &#x60;customer_id&#x60; must begin with \&quot;C\&quot; (for example, &#39;C046psxkn&#39;). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) | [optional] 
**posix_groups** | [**List[PosixGroup]**](PosixGroup.md) | Optional. The POSIX groups associated with the &#x60;Group&#x60;. | [optional] 
**update_time** | **str** | Output only. The time when the &#x60;Group&#x60; was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


