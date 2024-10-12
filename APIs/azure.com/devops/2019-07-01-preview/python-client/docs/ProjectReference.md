# ProjectReference

Reference to an Azure DevOps Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique immutable identifier of the Azure DevOps Project. | [optional] [readonly] 
**name** | **str** | Name of the Azure DevOps Project. | 

## Example

```python
from openapi_client.models.project_reference import ProjectReference

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectReference from a JSON string
project_reference_instance = ProjectReference.from_json(json)
# print the JSON string representation of the object
print(ProjectReference.to_json())

# convert the object into a dict
project_reference_dict = project_reference_instance.to_dict()
# create an instance of ProjectReference from a dict
project_reference_from_dict = ProjectReference.from_dict(project_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


