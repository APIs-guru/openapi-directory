# GetAllActionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllActionsResponseListInner]**](GetAllActionsResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_actions_response import GetAllActionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllActionsResponse from a JSON string
get_all_actions_response_instance = GetAllActionsResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllActionsResponse.to_json())

# convert the object into a dict
get_all_actions_response_dict = get_all_actions_response_instance.to_dict()
# create an instance of GetAllActionsResponse from a dict
get_all_actions_response_from_dict = GetAllActionsResponse.from_dict(get_all_actions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


