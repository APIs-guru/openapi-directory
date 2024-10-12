# GetAllWorkflowsResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**active** | **bool** |  | [optional] 
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**input** | **str** |  | 
**name** | **str** |  | 
**owner** | **str** |  | 
**trigger** | **str** |  | 

## Example

```python
from openapi_client.models.get_all_workflows_response_list_inner import GetAllWorkflowsResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllWorkflowsResponseListInner from a JSON string
get_all_workflows_response_list_inner_instance = GetAllWorkflowsResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllWorkflowsResponseListInner.to_json())

# convert the object into a dict
get_all_workflows_response_list_inner_dict = get_all_workflows_response_list_inner_instance.to_dict()
# create an instance of GetAllWorkflowsResponseListInner from a dict
get_all_workflows_response_list_inner_from_dict = GetAllWorkflowsResponseListInner.from_dict(get_all_workflows_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


