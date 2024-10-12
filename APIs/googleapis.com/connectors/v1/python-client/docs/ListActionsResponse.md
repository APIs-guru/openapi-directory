# ListActionsResponse

Response message for ListActions API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[RuntimeActionSchema]**](RuntimeActionSchema.md) | list of actions | [optional] 
**next_page_token** | **str** | token for next page | [optional] 

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


