# AssignmentInfo

Information about the guest configuration assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**ConfigurationInfo**](ConfigurationInfo.md) |  | [optional] 
**name** | **str** | Name of the guest configuration assignment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_info import AssignmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentInfo from a JSON string
assignment_info_instance = AssignmentInfo.from_json(json)
# print the JSON string representation of the object
print(AssignmentInfo.to_json())

# convert the object into a dict
assignment_info_dict = assignment_info_instance.to_dict()
# create an instance of AssignmentInfo from a dict
assignment_info_from_dict = AssignmentInfo.from_dict(assignment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


