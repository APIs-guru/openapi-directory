# ShareMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Share invitation message text. | [optional] 
**created** | **datetime** | Timestamp of message creation. | [optional] 
**id** | **int** | Message id. | [optional] 
**modified** | **datetime** | Timestamp of message modification. | [optional] 
**share_id** | **int** | ID of associated share | [optional] 
**subject** | **str** | Share invitation message subject. | [optional] 
**user_id** | **int** | User ID who generated share invite | [optional] 

## Example

```python
from openapi_client.models.share_message import ShareMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ShareMessage from a JSON string
share_message_instance = ShareMessage.from_json(json)
# print the JSON string representation of the object
print(ShareMessage.to_json())

# convert the object into a dict
share_message_dict = share_message_instance.to_dict()
# create an instance of ShareMessage from a dict
share_message_from_dict = ShareMessage.from_dict(share_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


