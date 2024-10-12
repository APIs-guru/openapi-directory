# IndividualStudentsOptions

Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**student_ids** | **List[str]** | Identifiers for the students that have access to the coursework/announcement. | [optional] 

## Example

```python
from openapi_client.models.individual_students_options import IndividualStudentsOptions

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualStudentsOptions from a JSON string
individual_students_options_instance = IndividualStudentsOptions.from_json(json)
# print the JSON string representation of the object
print(IndividualStudentsOptions.to_json())

# convert the object into a dict
individual_students_options_dict = individual_students_options_instance.to_dict()
# create an instance of IndividualStudentsOptions from a dict
individual_students_options_from_dict = IndividualStudentsOptions.from_dict(individual_students_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


