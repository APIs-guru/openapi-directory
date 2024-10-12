# ProjectListResult

The result of a request to list projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of projects. | [optional] 
**value** | [**List[Project]**](Project.md) | The list of projects. Since this list may be incomplete, the nextLink field should be used to request the next list of projects. | [optional] 

## Example

```python
from openapi_client.models.project_list_result import ProjectListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectListResult from a JSON string
project_list_result_instance = ProjectListResult.from_json(json)
# print the JSON string representation of the object
print(ProjectListResult.to_json())

# convert the object into a dict
project_list_result_dict = project_list_result_instance.to_dict()
# create an instance of ProjectListResult from a dict
project_list_result_from_dict = ProjectListResult.from_dict(project_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


