# HistoryLabelAdded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_ids** | **List[str]** | Label IDs added to the message. | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.history_label_added import HistoryLabelAdded

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryLabelAdded from a JSON string
history_label_added_instance = HistoryLabelAdded.from_json(json)
# print the JSON string representation of the object
print(HistoryLabelAdded.to_json())

# convert the object into a dict
history_label_added_dict = history_label_added_instance.to_dict()
# create an instance of HistoryLabelAdded from a dict
history_label_added_from_dict = HistoryLabelAdded.from_dict(history_label_added_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


