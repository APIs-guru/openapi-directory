# ProjectsGet200Response

A project resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProjectsList200ResponseValueInnerProperties**](ProjectsList200ResponseValueInnerProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.projects_get200_response import ProjectsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsGet200Response from a JSON string
projects_get200_response_instance = ProjectsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ProjectsGet200Response.to_json())

# convert the object into a dict
projects_get200_response_dict = projects_get200_response_instance.to_dict()
# create an instance of ProjectsGet200Response from a dict
projects_get200_response_from_dict = ProjectsGet200Response.from_dict(projects_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


