# Entry

A single entry in the confusion matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_count** | **str** | Number of items being predicted as this label. | [optional] 
**predicted_label** | **str** | The predicted label. For confidence_threshold &gt; 0, we will also add an entry indicating the number of items under the confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.entry import Entry

# TODO update the JSON string below
json = "{}"
# create an instance of Entry from a JSON string
entry_instance = Entry.from_json(json)
# print the JSON string representation of the object
print(Entry.to_json())

# convert the object into a dict
entry_dict = entry_instance.to_dict()
# create an instance of Entry from a dict
entry_from_dict = Entry.from_dict(entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


