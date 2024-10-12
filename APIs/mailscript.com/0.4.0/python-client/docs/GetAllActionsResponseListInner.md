# GetAllActionsResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ActionSendConfig**](ActionSendConfig.md) |  | 
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**output** | **str** |  | 
**owner** | **str** |  | 
**list** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.get_all_actions_response_list_inner import GetAllActionsResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllActionsResponseListInner from a JSON string
get_all_actions_response_list_inner_instance = GetAllActionsResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllActionsResponseListInner.to_json())

# convert the object into a dict
get_all_actions_response_list_inner_dict = get_all_actions_response_list_inner_instance.to_dict()
# create an instance of GetAllActionsResponseListInner from a dict
get_all_actions_response_list_inner_from_dict = GetAllActionsResponseListInner.from_dict(get_all_actions_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


