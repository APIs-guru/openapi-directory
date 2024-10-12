# CreativeGroupAssignment

Creative Group Assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_group_id** | **str** | ID of the creative group to be assigned. | [optional] 
**creative_group_number** | **str** | Creative group number of the creative group assignment. | [optional] 

## Example

```python
from openapi_client.models.creative_group_assignment import CreativeGroupAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeGroupAssignment from a JSON string
creative_group_assignment_instance = CreativeGroupAssignment.from_json(json)
# print the JSON string representation of the object
print(CreativeGroupAssignment.to_json())

# convert the object into a dict
creative_group_assignment_dict = creative_group_assignment_instance.to_dict()
# create an instance of CreativeGroupAssignment from a dict
creative_group_assignment_from_dict = CreativeGroupAssignment.from_dict(creative_group_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


