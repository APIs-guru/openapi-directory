# WritableContactAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | **int** |  | 
**content_type** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**object** | **object** |  | [optional] [readonly] 
**object_id** | **int** |  | 
**priority** | **str** |  | [optional] 
**role** | **int** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_contact_assignment import WritableContactAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of WritableContactAssignment from a JSON string
writable_contact_assignment_instance = WritableContactAssignment.from_json(json)
# print the JSON string representation of the object
print(WritableContactAssignment.to_json())

# convert the object into a dict
writable_contact_assignment_dict = writable_contact_assignment_instance.to_dict()
# create an instance of WritableContactAssignment from a dict
writable_contact_assignment_from_dict = WritableContactAssignment.from_dict(writable_contact_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


