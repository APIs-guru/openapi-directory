# ModifyThreadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_label_ids** | **List[str]** | A list of IDs of labels to add to this thread. You can add up to 100 labels with each update. | [optional] 
**remove_label_ids** | **List[str]** | A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update. | [optional] 

## Example

```python
from openapi_client.models.modify_thread_request import ModifyThreadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyThreadRequest from a JSON string
modify_thread_request_instance = ModifyThreadRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyThreadRequest.to_json())

# convert the object into a dict
modify_thread_request_dict = modify_thread_request_instance.to_dict()
# create an instance of ModifyThreadRequest from a dict
modify_thread_request_from_dict = ModifyThreadRequest.from_dict(modify_thread_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


