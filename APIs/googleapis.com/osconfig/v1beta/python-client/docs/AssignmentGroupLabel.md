# AssignmentGroupLabel

Represents a group of VM intances that can be identified as having all these labels, for example \"env=prod and app=web\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. | [optional] 

## Example

```python
from openapi_client.models.assignment_group_label import AssignmentGroupLabel

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentGroupLabel from a JSON string
assignment_group_label_instance = AssignmentGroupLabel.from_json(json)
# print the JSON string representation of the object
print(AssignmentGroupLabel.to_json())

# convert the object into a dict
assignment_group_label_dict = assignment_group_label_instance.to_dict()
# create an instance of AssignmentGroupLabel from a dict
assignment_group_label_from_dict = AssignmentGroupLabel.from_dict(assignment_group_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


