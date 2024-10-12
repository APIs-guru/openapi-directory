# LinkedAccessCheckList

List of the linked access checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[LinkedAccessCheck]**](LinkedAccessCheck.md) | List of the linked access checks. | [optional] 

## Example

```python
from openapi_client.models.linked_access_check_list import LinkedAccessCheckList

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedAccessCheckList from a JSON string
linked_access_check_list_instance = LinkedAccessCheckList.from_json(json)
# print the JSON string representation of the object
print(LinkedAccessCheckList.to_json())

# convert the object into a dict
linked_access_check_list_dict = linked_access_check_list_instance.to_dict()
# create an instance of LinkedAccessCheckList from a dict
linked_access_check_list_from_dict = LinkedAccessCheckList.from_dict(linked_access_check_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


