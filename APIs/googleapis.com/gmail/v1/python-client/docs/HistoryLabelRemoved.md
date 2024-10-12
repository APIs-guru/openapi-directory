# HistoryLabelRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_ids** | **List[str]** | Label IDs removed from the message. | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.history_label_removed import HistoryLabelRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryLabelRemoved from a JSON string
history_label_removed_instance = HistoryLabelRemoved.from_json(json)
# print the JSON string representation of the object
print(HistoryLabelRemoved.to_json())

# convert the object into a dict
history_label_removed_dict = history_label_removed_instance.to_dict()
# create an instance of HistoryLabelRemoved from a dict
history_label_removed_from_dict = HistoryLabelRemoved.from_dict(history_label_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


