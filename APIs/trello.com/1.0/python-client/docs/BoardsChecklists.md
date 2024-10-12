# BoardsChecklists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | a string with a length from 1 to 16384 | [optional] 

## Example

```python
from openapi_client.models.boards_checklists import BoardsChecklists

# TODO update the JSON string below
json = "{}"
# create an instance of BoardsChecklists from a JSON string
boards_checklists_instance = BoardsChecklists.from_json(json)
# print the JSON string representation of the object
print(BoardsChecklists.to_json())

# convert the object into a dict
boards_checklists_dict = boards_checklists_instance.to_dict()
# create an instance of BoardsChecklists from a dict
boards_checklists_from_dict = BoardsChecklists.from_dict(boards_checklists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


