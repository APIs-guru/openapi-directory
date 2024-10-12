# ChecklistsCheckItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked** | **str** |  true or false | [optional] 
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 

## Example

```python
from openapi_client.models.checklists_check_items import ChecklistsCheckItems

# TODO update the JSON string below
json = "{}"
# create an instance of ChecklistsCheckItems from a JSON string
checklists_check_items_instance = ChecklistsCheckItems.from_json(json)
# print the JSON string representation of the object
print(ChecklistsCheckItems.to_json())

# convert the object into a dict
checklists_check_items_dict = checklists_check_items_instance.to_dict()
# create an instance of ChecklistsCheckItems from a dict
checklists_check_items_from_dict = ChecklistsCheckItems.from_dict(checklists_check_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


