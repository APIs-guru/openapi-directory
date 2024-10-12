# BoardsMembers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | An email address | [optional] 
**full_name** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 
**type** | **str** | One of: admin, normal or observer | [optional] 

## Example

```python
from openapi_client.models.boards_members import BoardsMembers

# TODO update the JSON string below
json = "{}"
# create an instance of BoardsMembers from a JSON string
boards_members_instance = BoardsMembers.from_json(json)
# print the JSON string representation of the object
print(BoardsMembers.to_json())

# convert the object into a dict
boards_members_dict = boards_members_instance.to_dict()
# create an instance of BoardsMembers from a dict
boards_members_from_dict = BoardsMembers.from_dict(boards_members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


