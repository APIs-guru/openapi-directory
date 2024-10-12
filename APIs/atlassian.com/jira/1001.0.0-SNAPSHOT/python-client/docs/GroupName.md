# GroupName

Details about a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. | [optional] 
**name** | **str** | The name of group. | [optional] 
**var_self** | **str** | The URL for these group details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_name import GroupName

# TODO update the JSON string below
json = "{}"
# create an instance of GroupName from a JSON string
group_name_instance = GroupName.from_json(json)
# print the JSON string representation of the object
print(GroupName.to_json())

# convert the object into a dict
group_name_dict = group_name_instance.to_dict()
# create an instance of GroupName from a dict
group_name_from_dict = GroupName.from_dict(group_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


