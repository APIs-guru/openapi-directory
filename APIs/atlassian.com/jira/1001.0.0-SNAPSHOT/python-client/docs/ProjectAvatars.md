# ProjectAvatars

List of project avatars.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom** | [**List[Avatar]**](Avatar.md) | List of avatars added to Jira. These avatars may be deleted. | [optional] [readonly] 
**system** | [**List[Avatar]**](Avatar.md) | List of avatars included with Jira. These avatars cannot be deleted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_avatars import ProjectAvatars

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectAvatars from a JSON string
project_avatars_instance = ProjectAvatars.from_json(json)
# print the JSON string representation of the object
print(ProjectAvatars.to_json())

# convert the object into a dict
project_avatars_dict = project_avatars_instance.to_dict()
# create an instance of ProjectAvatars from a dict
project_avatars_from_dict = ProjectAvatars.from_dict(project_avatars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


