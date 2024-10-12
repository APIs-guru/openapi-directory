# Group

A group represents a subset of spokes attached to a hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the group was created. | [optional] [readonly] 
**description** | **str** | Optional. The description of the group. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). | [optional] 
**name** | **str** | Immutable. The name of the group. Group names must be unique. They use the following form: &#x60;projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}&#x60; | [optional] 
**state** | **str** | Output only. The current lifecycle state of this group. | [optional] [readonly] 
**uid** | **str** | Output only. The Google-generated UUID for the group. This value is unique across all group resources. If a group is deleted and another with the same name is created, the new route table is assigned a different unique_id. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the group was last updated. | [optional] [readonly] 

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


