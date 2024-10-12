# List

Represents a list of some users that the authenticated user follows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The internal database ID of the list. Cast from an integer, but not guaranteed to be a number. | 
**replies_policy** | **str** | The user-defined title of the list. | 
**title** | **str** | The user-defined title of the list. | 

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


