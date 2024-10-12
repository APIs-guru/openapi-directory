# GetProtectedItemQueryObject

This object filters the list of backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Specifies if the additional information should be provided for this item. | [optional] 

## Example

```python
from openapi_client.models.get_protected_item_query_object import GetProtectedItemQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of GetProtectedItemQueryObject from a JSON string
get_protected_item_query_object_instance = GetProtectedItemQueryObject.from_json(json)
# print the JSON string representation of the object
print(GetProtectedItemQueryObject.to_json())

# convert the object into a dict
get_protected_item_query_object_dict = get_protected_item_query_object_instance.to_dict()
# create an instance of GetProtectedItemQueryObject from a dict
get_protected_item_query_object_from_dict = GetProtectedItemQueryObject.from_dict(get_protected_item_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


