# ModifyMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_label_ids** | **List[str]** | A list of IDs of labels to add to this message. You can add up to 100 labels with each update. | [optional] 
**remove_label_ids** | **List[str]** | A list IDs of labels to remove from this message. You can remove up to 100 labels with each update. | [optional] 

## Example

```python
from openapi_client.models.modify_message_request import ModifyMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyMessageRequest from a JSON string
modify_message_request_instance = ModifyMessageRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyMessageRequest.to_json())

# convert the object into a dict
modify_message_request_dict = modify_message_request_instance.to_dict()
# create an instance of ModifyMessageRequest from a dict
modify_message_request_from_dict = ModifyMessageRequest.from_dict(modify_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


