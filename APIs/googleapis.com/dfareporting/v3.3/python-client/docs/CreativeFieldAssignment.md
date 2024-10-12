# CreativeFieldAssignment

Creative Field Assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_field_id** | **str** | ID of the creative field. | [optional] 
**creative_field_value_id** | **str** | ID of the creative field value. | [optional] 

## Example

```python
from openapi_client.models.creative_field_assignment import CreativeFieldAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFieldAssignment from a JSON string
creative_field_assignment_instance = CreativeFieldAssignment.from_json(json)
# print the JSON string representation of the object
print(CreativeFieldAssignment.to_json())

# convert the object into a dict
creative_field_assignment_dict = creative_field_assignment_instance.to_dict()
# create an instance of CreativeFieldAssignment from a dict
creative_field_assignment_from_dict = CreativeFieldAssignment.from_dict(creative_field_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


