# AddActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | **List[str]** |  | 
**name** | **str** |  | 
**config** | [**AddActionAliasRequestConfig**](AddActionAliasRequestConfig.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_request import AddActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionRequest from a JSON string
add_action_request_instance = AddActionRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionRequest.to_json())

# convert the object into a dict
add_action_request_dict = add_action_request_instance.to_dict()
# create an instance of AddActionRequest from a dict
add_action_request_from_dict = AddActionRequest.from_dict(add_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


