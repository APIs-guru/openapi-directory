# ContactAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**NestedContact**](NestedContact.md) |  | 
**content_type** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**object** | **object** |  | [optional] [readonly] 
**object_id** | **int** |  | 
**priority** | [**Priority**](Priority.md) |  | [optional] 
**role** | [**NestedContactRole**](NestedContactRole.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.contact_assignment import ContactAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of ContactAssignment from a JSON string
contact_assignment_instance = ContactAssignment.from_json(json)
# print the JSON string representation of the object
print(ContactAssignment.to_json())

# convert the object into a dict
contact_assignment_dict = contact_assignment_instance.to_dict()
# create an instance of ContactAssignment from a dict
contact_assignment_from_dict = ContactAssignment.from_dict(contact_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


