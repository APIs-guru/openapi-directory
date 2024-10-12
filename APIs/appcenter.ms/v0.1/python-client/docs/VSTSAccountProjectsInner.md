# VSTSAccountProjectsInner

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
from openapi_client.models.vsts_account_projects_inner import VSTSAccountProjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSAccountProjectsInner from a JSON string
vsts_account_projects_inner_instance = VSTSAccountProjectsInner.from_json(json)
# print the JSON string representation of the object
print(VSTSAccountProjectsInner.to_json())

# convert the object into a dict
vsts_account_projects_inner_dict = vsts_account_projects_inner_instance.to_dict()
# create an instance of VSTSAccountProjectsInner from a dict
vsts_account_projects_inner_from_dict = VSTSAccountProjectsInner.from_dict(vsts_account_projects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


