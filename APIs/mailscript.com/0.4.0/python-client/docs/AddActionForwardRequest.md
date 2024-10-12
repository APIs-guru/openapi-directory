# AddActionForwardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionForwardRequestConfig**](AddActionForwardRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_forward_request import AddActionForwardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionForwardRequest from a JSON string
add_action_forward_request_instance = AddActionForwardRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionForwardRequest.to_json())

# convert the object into a dict
add_action_forward_request_dict = add_action_forward_request_instance.to_dict()
# create an instance of AddActionForwardRequest from a dict
add_action_forward_request_from_dict = AddActionForwardRequest.from_dict(add_action_forward_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


