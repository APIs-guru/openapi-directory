# VSTSProject

VSTS project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Project description | [optional] 
**id** | **str** | Project id | [optional] 
**name** | **str** | Project name | [optional] 
**state** | **str** | Project state | [optional] 
**url** | **str** | Project URL | [optional] 
**visibility** | **str** | Project visibility | [optional] 

## Example

```python
from openapi_client.models.vsts_project import VSTSProject

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSProject from a JSON string
vsts_project_instance = VSTSProject.from_json(json)
# print the JSON string representation of the object
print(VSTSProject.to_json())

# convert the object into a dict
vsts_project_dict = vsts_project_instance.to_dict()
# create an instance of VSTSProject from a dict
vsts_project_from_dict = VSTSProject.from_dict(vsts_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


