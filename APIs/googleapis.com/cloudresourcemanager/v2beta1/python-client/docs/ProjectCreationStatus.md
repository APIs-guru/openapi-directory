# ProjectCreationStatus

A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation time of the project creation workflow. | [optional] 
**gettable** | **bool** | True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete. | [optional] 
**ready** | **bool** | True if the project creation process is complete. | [optional] 

## Example

```python
from openapi_client.models.project_creation_status import ProjectCreationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCreationStatus from a JSON string
project_creation_status_instance = ProjectCreationStatus.from_json(json)
# print the JSON string representation of the object
print(ProjectCreationStatus.to_json())

# convert the object into a dict
project_creation_status_dict = project_creation_status_instance.to_dict()
# create an instance of ProjectCreationStatus from a dict
project_creation_status_from_dict = ProjectCreationStatus.from_dict(project_creation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


