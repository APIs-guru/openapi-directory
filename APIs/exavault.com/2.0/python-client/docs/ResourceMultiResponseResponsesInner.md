# ResourceMultiResponseResponsesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**meta** | **object** | Meta object containing non-standard meta-information about the error. | [optional] 
**type** | **str** | Type of item. \&quot;resource\&quot; | [optional] 
**code** | **str** | Specific internal error string. | [optional] 
**detail** | **str** | human-readable explanation specific to this occurrence of the problem. | [optional] 
**title** | **str** | Human readable summary of the problem. | [optional] 

## Example

```python
from openapi_client.models.resource_multi_response_responses_inner import ResourceMultiResponseResponsesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMultiResponseResponsesInner from a JSON string
resource_multi_response_responses_inner_instance = ResourceMultiResponseResponsesInner.from_json(json)
# print the JSON string representation of the object
print(ResourceMultiResponseResponsesInner.to_json())

# convert the object into a dict
resource_multi_response_responses_inner_dict = resource_multi_response_responses_inner_instance.to_dict()
# create an instance of ResourceMultiResponseResponsesInner from a dict
resource_multi_response_responses_inner_from_dict = ResourceMultiResponseResponsesInner.from_dict(resource_multi_response_responses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


