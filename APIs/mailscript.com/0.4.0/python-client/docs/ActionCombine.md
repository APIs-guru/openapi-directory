# ActionCombine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**list** | **List[str]** |  | [optional] 
**name** | **str** |  | 
**owner** | **str** |  | 

## Example

```python
from openapi_client.models.action_combine import ActionCombine

# TODO update the JSON string below
json = "{}"
# create an instance of ActionCombine from a JSON string
action_combine_instance = ActionCombine.from_json(json)
# print the JSON string representation of the object
print(ActionCombine.to_json())

# convert the object into a dict
action_combine_dict = action_combine_instance.to_dict()
# create an instance of ActionCombine from a dict
action_combine_from_dict = ActionCombine.from_dict(action_combine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


