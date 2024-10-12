# ProjectCreationWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_project_types** | **List[str]** |  | [optional] 
**name** | **str** |  | 
**onboarding_completed_demos** | **List[str]** |  | [optional] 
**organization** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.project_creation_write import ProjectCreationWrite

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCreationWrite from a JSON string
project_creation_write_instance = ProjectCreationWrite.from_json(json)
# print the JSON string representation of the object
print(ProjectCreationWrite.to_json())

# convert the object into a dict
project_creation_write_dict = project_creation_write_instance.to_dict()
# create an instance of ProjectCreationWrite from a dict
project_creation_write_from_dict = ProjectCreationWrite.from_dict(project_creation_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


