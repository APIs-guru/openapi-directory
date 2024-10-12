# SetWorkflowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**pairs** | [**List[SetWorkflowRequestPairsInner]**](SetWorkflowRequestPairsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_workflow_request import SetWorkflowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetWorkflowRequest from a JSON string
set_workflow_request_instance = SetWorkflowRequest.from_json(json)
# print the JSON string representation of the object
print(SetWorkflowRequest.to_json())

# convert the object into a dict
set_workflow_request_dict = set_workflow_request_instance.to_dict()
# create an instance of SetWorkflowRequest from a dict
set_workflow_request_from_dict = SetWorkflowRequest.from_dict(set_workflow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


