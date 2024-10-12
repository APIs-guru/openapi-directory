# SubClosedList

Sublist of items for a list entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_form** | **str** | The standard form that the list represents. | [optional] 
**list** | **List[str]** | List of synonym words. | [optional] 

## Example

```python
from openapi_client.models.sub_closed_list import SubClosedList

# TODO update the JSON string below
json = "{}"
# create an instance of SubClosedList from a JSON string
sub_closed_list_instance = SubClosedList.from_json(json)
# print the JSON string representation of the object
print(SubClosedList.to_json())

# convert the object into a dict
sub_closed_list_dict = sub_closed_list_instance.to_dict()
# create an instance of SubClosedList from a dict
sub_closed_list_from_dict = SubClosedList.from_dict(sub_closed_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


