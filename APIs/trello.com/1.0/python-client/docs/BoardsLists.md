# BoardsLists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 

## Example

```python
from openapi_client.models.boards_lists import BoardsLists

# TODO update the JSON string below
json = "{}"
# create an instance of BoardsLists from a JSON string
boards_lists_instance = BoardsLists.from_json(json)
# print the JSON string representation of the object
print(BoardsLists.to_json())

# convert the object into a dict
boards_lists_dict = boards_lists_instance.to_dict()
# create an instance of BoardsLists from a dict
boards_lists_from_dict = BoardsLists.from_dict(boards_lists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


