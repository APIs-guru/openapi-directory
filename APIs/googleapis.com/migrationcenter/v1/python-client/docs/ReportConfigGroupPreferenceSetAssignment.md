# ReportConfigGroupPreferenceSetAssignment

Represents a combination of a group with a preference set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** | Required. Name of the group. | [optional] 
**preference_set** | **str** | Required. Name of the Preference Set. | [optional] 

## Example

```python
from openapi_client.models.report_config_group_preference_set_assignment import ReportConfigGroupPreferenceSetAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigGroupPreferenceSetAssignment from a JSON string
report_config_group_preference_set_assignment_instance = ReportConfigGroupPreferenceSetAssignment.from_json(json)
# print the JSON string representation of the object
print(ReportConfigGroupPreferenceSetAssignment.to_json())

# convert the object into a dict
report_config_group_preference_set_assignment_dict = report_config_group_preference_set_assignment_instance.to_dict()
# create an instance of ReportConfigGroupPreferenceSetAssignment from a dict
report_config_group_preference_set_assignment_from_dict = ReportConfigGroupPreferenceSetAssignment.from_dict(report_config_group_preference_set_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


