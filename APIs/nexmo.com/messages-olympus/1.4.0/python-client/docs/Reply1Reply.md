# Reply1Reply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description that may be added to the interactive options presented (available only on interactive lists). | [optional] 
**id** | **str** | An identifier to help identify the exact interactive message response. | 
**title** | **str** | The title displayed on the interactive option chosen. | 

## Example

```python
from openapi_client.models.reply1_reply import Reply1Reply

# TODO update the JSON string below
json = "{}"
# create an instance of Reply1Reply from a JSON string
reply1_reply_instance = Reply1Reply.from_json(json)
# print the JSON string representation of the object
print(Reply1Reply.to_json())

# convert the object into a dict
reply1_reply_dict = reply1_reply_instance.to_dict()
# create an instance of Reply1Reply from a dict
reply1_reply_from_dict = Reply1Reply.from_dict(reply1_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


