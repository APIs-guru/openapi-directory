# AddActionReplyAllRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionReplyAllRequestConfig**](AddActionReplyAllRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_reply_all_request import AddActionReplyAllRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionReplyAllRequest from a JSON string
add_action_reply_all_request_instance = AddActionReplyAllRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionReplyAllRequest.to_json())

# convert the object into a dict
add_action_reply_all_request_dict = add_action_reply_all_request_instance.to_dict()
# create an instance of AddActionReplyAllRequest from a dict
add_action_reply_all_request_from_dict = AddActionReplyAllRequest.from_dict(add_action_reply_all_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


