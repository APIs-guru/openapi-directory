# AddActionSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionSendRequestConfig**](AddActionSendRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_send_request import AddActionSendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionSendRequest from a JSON string
add_action_send_request_instance = AddActionSendRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionSendRequest.to_json())

# convert the object into a dict
add_action_send_request_dict = add_action_send_request_instance.to_dict()
# create an instance of AddActionSendRequest from a dict
add_action_send_request_from_dict = AddActionSendRequest.from_dict(add_action_send_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


