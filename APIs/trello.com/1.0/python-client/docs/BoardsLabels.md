# BoardsLabels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | A valid label color or null | [optional] 
**name** | **str** | a string with a length from 0 to 16384 | [optional] 

## Example

```python
from openapi_client.models.boards_labels import BoardsLabels

# TODO update the JSON string below
json = "{}"
# create an instance of BoardsLabels from a JSON string
boards_labels_instance = BoardsLabels.from_json(json)
# print the JSON string representation of the object
print(BoardsLabels.to_json())

# convert the object into a dict
boards_labels_dict = boards_labels_instance.to_dict()
# create an instance of BoardsLabels from a dict
boards_labels_from_dict = BoardsLabels.from_dict(boards_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


