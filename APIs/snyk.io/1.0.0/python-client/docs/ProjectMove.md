# ProjectMove


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_org_id** | **str** | The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed. | [optional] 

## Example

```python
from openapi_client.models.project_move import ProjectMove

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectMove from a JSON string
project_move_instance = ProjectMove.from_json(json)
# print the JSON string representation of the object
print(ProjectMove.to_json())

# convert the object into a dict
project_move_dict = project_move_instance.to_dict()
# create an instance of ProjectMove from a dict
project_move_from_dict = ProjectMove.from_dict(project_move_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


