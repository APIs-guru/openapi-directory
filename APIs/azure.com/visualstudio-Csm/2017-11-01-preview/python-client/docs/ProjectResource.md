# ProjectResource

A Visual Studio Team Services project resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of project resource | [optional] 
**properties** | [**ProjectResourceProperties**](ProjectResourceProperties.md) |  | [optional] 
**id** | **str** | Unique identifier of the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_resource import ProjectResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResource from a JSON string
project_resource_instance = ProjectResource.from_json(json)
# print the JSON string representation of the object
print(ProjectResource.to_json())

# convert the object into a dict
project_resource_dict = project_resource_instance.to_dict()
# create an instance of ProjectResource from a dict
project_resource_from_dict = ProjectResource.from_dict(project_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


