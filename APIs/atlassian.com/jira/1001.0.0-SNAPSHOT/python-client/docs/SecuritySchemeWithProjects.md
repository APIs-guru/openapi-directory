# SecuritySchemeWithProjects

Details about an issue security scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_level** | **int** | The default level ID of the issue security scheme. | [optional] [readonly] 
**description** | **str** | The description of the issue security scheme. | [optional] [readonly] 
**id** | **int** | The ID of the issue security scheme. | [readonly] 
**name** | **str** | The name of the issue security scheme. | [readonly] 
**project_ids** | **List[int]** | The list of project IDs associated with the issue security scheme. | [optional] [readonly] 
**var_self** | **str** | The URL of the issue security scheme. | [readonly] 

## Example

```python
from openapi_client.models.security_scheme_with_projects import SecuritySchemeWithProjects

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeWithProjects from a JSON string
security_scheme_with_projects_instance = SecuritySchemeWithProjects.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeWithProjects.to_json())

# convert the object into a dict
security_scheme_with_projects_dict = security_scheme_with_projects_instance.to_dict()
# create an instance of SecuritySchemeWithProjects from a dict
security_scheme_with_projects_from_dict = SecuritySchemeWithProjects.from_dict(security_scheme_with_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


