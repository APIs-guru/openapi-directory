# List

A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **str** | The ID of the list. | [optional] 
**nesting_level** | [**Dict[str, NestingLevel]**](NestingLevel.md) | A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive. | [optional] 

## Example

```python
from openapi_client.models.list import List

# TODO update the JSON string below
json = "{}"
# create an instance of List from a JSON string
list_instance = List.from_json(json)
# print the JSON string representation of the object
print(List.to_json())

# convert the object into a dict
list_dict = list_instance.to_dict()
# create an instance of List from a dict
list_from_dict = List.from_dict(list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


