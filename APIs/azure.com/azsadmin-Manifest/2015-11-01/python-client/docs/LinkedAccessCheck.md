# LinkedAccessCheck

The linked resource access checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_name** | **str** | The action name. | [optional] 
**linked_action** | **str** | The linked action. | [optional] 
**linked_action_verb** | **str** | The linked action verb. | [optional] 
**linked_property** | **str** | The linked property. | [optional] 
**linked_type** | **str** | The linked type. | [optional] 

## Example

```python
from openapi_client.models.linked_access_check import LinkedAccessCheck

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedAccessCheck from a JSON string
linked_access_check_instance = LinkedAccessCheck.from_json(json)
# print the JSON string representation of the object
print(LinkedAccessCheck.to_json())

# convert the object into a dict
linked_access_check_dict = linked_access_check_instance.to_dict()
# create an instance of LinkedAccessCheck from a dict
linked_access_check_from_dict = LinkedAccessCheck.from_dict(linked_access_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


