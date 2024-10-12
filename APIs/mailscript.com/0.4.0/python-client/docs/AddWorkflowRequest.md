# AddWorkflowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**active** | **bool** |  | [optional] 
**input** | **str** |  | 
**name** | **str** |  | 
**trigger** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_workflow_request import AddWorkflowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddWorkflowRequest from a JSON string
add_workflow_request_instance = AddWorkflowRequest.from_json(json)
# print the JSON string representation of the object
print(AddWorkflowRequest.to_json())

# convert the object into a dict
add_workflow_request_dict = add_workflow_request_instance.to_dict()
# create an instance of AddWorkflowRequest from a dict
add_workflow_request_from_dict = AddWorkflowRequest.from_dict(add_workflow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


