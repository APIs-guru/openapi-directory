# ProjectWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_project_types** | **List[str]** |  | [optional] 
**name** | **str** |  | 
**onboarding_completed_demos** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.project_write import ProjectWrite

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectWrite from a JSON string
project_write_instance = ProjectWrite.from_json(json)
# print the JSON string representation of the object
print(ProjectWrite.to_json())

# convert the object into a dict
project_write_dict = project_write_instance.to_dict()
# create an instance of ProjectWrite from a dict
project_write_from_dict = ProjectWrite.from_dict(project_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


