# ProjectResourceListResult

The response to a request to list Team Services project resources in a resource group/account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProjectResource]**](ProjectResource.md) | List of project resource details. | [optional] 

## Example

```python
from openapi_client.models.project_resource_list_result import ProjectResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResourceListResult from a JSON string
project_resource_list_result_instance = ProjectResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ProjectResourceListResult.to_json())

# convert the object into a dict
project_resource_list_result_dict = project_resource_list_result_instance.to_dict()
# create an instance of ProjectResourceListResult from a dict
project_resource_list_result_from_dict = ProjectResourceListResult.from_dict(project_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


