# AddActionReplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionReplyRequestConfig**](AddActionReplyRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_reply_request import AddActionReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionReplyRequest from a JSON string
add_action_reply_request_instance = AddActionReplyRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionReplyRequest.to_json())

# convert the object into a dict
add_action_reply_request_dict = add_action_reply_request_instance.to_dict()
# create an instance of AddActionReplyRequest from a dict
add_action_reply_request_from_dict = AddActionReplyRequest.from_dict(add_action_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


