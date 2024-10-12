# MarkUnreadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | ID of the message from where the channel is marked unread | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mark_unread_request import MarkUnreadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkUnreadRequest from a JSON string
mark_unread_request_instance = MarkUnreadRequest.from_json(json)
# print the JSON string representation of the object
print(MarkUnreadRequest.to_json())

# convert the object into a dict
mark_unread_request_dict = mark_unread_request_instance.to_dict()
# create an instance of MarkUnreadRequest from a dict
mark_unread_request_from_dict = MarkUnreadRequest.from_dict(mark_unread_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


