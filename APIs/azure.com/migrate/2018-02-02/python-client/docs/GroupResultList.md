# GroupResultList

List of groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Group]**](Group.md) | List of groups. | [optional] 

## Example

```python
from openapi_client.models.group_result_list import GroupResultList

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResultList from a JSON string
group_result_list_instance = GroupResultList.from_json(json)
# print the JSON string representation of the object
print(GroupResultList.to_json())

# convert the object into a dict
group_result_list_dict = group_result_list_instance.to_dict()
# create an instance of GroupResultList from a dict
group_result_list_from_dict = GroupResultList.from_dict(group_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


