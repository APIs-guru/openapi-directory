# Stack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**events** | [**List[StackEventsInner]**](StackEventsInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stack import Stack

# TODO update the JSON string below
json = "{}"
# create an instance of Stack from a JSON string
stack_instance = Stack.from_json(json)
# print the JSON string representation of the object
print(Stack.to_json())

# convert the object into a dict
stack_dict = stack_instance.to_dict()
# create an instance of Stack from a dict
stack_from_dict = Stack.from_dict(stack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


