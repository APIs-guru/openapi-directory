# GetAllWorkflowsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllWorkflowsResponseListInner]**](GetAllWorkflowsResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_workflows_response import GetAllWorkflowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllWorkflowsResponse from a JSON string
get_all_workflows_response_instance = GetAllWorkflowsResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllWorkflowsResponse.to_json())

# convert the object into a dict
get_all_workflows_response_dict = get_all_workflows_response_instance.to_dict()
# create an instance of GetAllWorkflowsResponse from a dict
get_all_workflows_response_from_dict = GetAllWorkflowsResponse.from_dict(get_all_workflows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


