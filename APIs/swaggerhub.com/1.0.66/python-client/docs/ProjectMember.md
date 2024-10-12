# ProjectMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**roles** | **List[str]** |  | [optional] [readonly] 
**type** | **str** |  | [default to 'USER']

## Example

```python
from openapi_client.models.project_member import ProjectMember

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectMember from a JSON string
project_member_instance = ProjectMember.from_json(json)
# print the JSON string representation of the object
print(ProjectMember.to_json())

# convert the object into a dict
project_member_dict = project_member_instance.to_dict()
# create an instance of ProjectMember from a dict
project_member_from_dict = ProjectMember.from_dict(project_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


