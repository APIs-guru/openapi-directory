# Checklists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_board** | **str** | id of the board that the checklist should be added to | [optional] 
**id_card** | **str** | id of the card that the checklist should be added to | [optional] 
**id_checklist_source** | **str** | The id of the source checklist to copy into a new checklist. | [optional] 
**name** | **str** | a string with a length from 0 to 16384 | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 

## Example

```python
from openapi_client.models.checklists import Checklists

# TODO update the JSON string below
json = "{}"
# create an instance of Checklists from a JSON string
checklists_instance = Checklists.from_json(json)
# print the JSON string representation of the object
print(Checklists.to_json())

# convert the object into a dict
checklists_dict = checklists_instance.to_dict()
# create an instance of Checklists from a dict
checklists_from_dict = Checklists.from_dict(checklists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


