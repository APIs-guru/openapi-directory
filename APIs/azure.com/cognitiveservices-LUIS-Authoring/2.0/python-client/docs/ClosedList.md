# ClosedList

Exported Model - A list entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the list entity. | [optional] 
**roles** | **List[str]** |  | [optional] 
**sub_lists** | [**List[SubClosedList]**](SubClosedList.md) | Sublists for the list entity. | [optional] 

## Example

```python
from openapi_client.models.closed_list import ClosedList

# TODO update the JSON string below
json = "{}"
# create an instance of ClosedList from a JSON string
closed_list_instance = ClosedList.from_json(json)
# print the JSON string representation of the object
print(ClosedList.to_json())

# convert the object into a dict
closed_list_dict = closed_list_instance.to_dict()
# create an instance of ClosedList from a dict
closed_list_from_dict = ClosedList.from_dict(closed_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


