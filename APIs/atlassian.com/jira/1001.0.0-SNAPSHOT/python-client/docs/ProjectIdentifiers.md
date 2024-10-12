# ProjectIdentifiers

Identifiers for a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the created project. | [readonly] 
**key** | **str** | The key of the created project. | [readonly] 
**var_self** | **str** | The URL of the created project. | [readonly] 

## Example

```python
from openapi_client.models.project_identifiers import ProjectIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIdentifiers from a JSON string
project_identifiers_instance = ProjectIdentifiers.from_json(json)
# print the JSON string representation of the object
print(ProjectIdentifiers.to_json())

# convert the object into a dict
project_identifiers_dict = project_identifiers_instance.to_dict()
# create an instance of ProjectIdentifiers from a dict
project_identifiers_from_dict = ProjectIdentifiers.from_dict(project_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


