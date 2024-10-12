# GetAllTriggersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllTriggersResponseListInner]**](GetAllTriggersResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_triggers_response import GetAllTriggersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllTriggersResponse from a JSON string
get_all_triggers_response_instance = GetAllTriggersResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllTriggersResponse.to_json())

# convert the object into a dict
get_all_triggers_response_dict = get_all_triggers_response_instance.to_dict()
# create an instance of GetAllTriggersResponse from a dict
get_all_triggers_response_from_dict = GetAllTriggersResponse.from_dict(get_all_triggers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


