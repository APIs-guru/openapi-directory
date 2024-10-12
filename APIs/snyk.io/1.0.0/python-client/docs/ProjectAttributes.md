# ProjectAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criticality** | **List[object]** |  | [optional] 
**environment** | **List[object]** |  | [optional] 
**lifecycle** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.project_attributes import ProjectAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectAttributes from a JSON string
project_attributes_instance = ProjectAttributes.from_json(json)
# print the JSON string representation of the object
print(ProjectAttributes.to_json())

# convert the object into a dict
project_attributes_dict = project_attributes_instance.to_dict()
# create an instance of ProjectAttributes from a dict
project_attributes_from_dict = ProjectAttributes.from_dict(project_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


