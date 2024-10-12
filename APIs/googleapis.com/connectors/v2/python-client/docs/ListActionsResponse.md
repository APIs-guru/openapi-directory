# ListActionsResponse

Response message for ActionService.ListActions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | List of action metadata. | [optional] 
**next_page_token** | **str** | Next page token if more actions available. | [optional] 
**unsupported_action_names** | **List[str]** | List of actions which contain unsupported Datatypes. Check datatype.proto for more information. | [optional] 

## Example

```python
from openapi_client.models.list_actions_response import ListActionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListActionsResponse from a JSON string
list_actions_response_instance = ListActionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListActionsResponse.to_json())

# convert the object into a dict
list_actions_response_dict = list_actions_response_instance.to_dict()
# create an instance of ListActionsResponse from a dict
list_actions_response_from_dict = ListActionsResponse.from_dict(list_actions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


