# ProjectMemberList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[ProjectMember]**](ProjectMember.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_member_list import ProjectMemberList

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectMemberList from a JSON string
project_member_list_instance = ProjectMemberList.from_json(json)
# print the JSON string representation of the object
print(ProjectMemberList.to_json())

# convert the object into a dict
project_member_list_dict = project_member_list_instance.to_dict()
# create an instance of ProjectMemberList from a dict
project_member_list_from_dict = ProjectMemberList.from_dict(project_member_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


