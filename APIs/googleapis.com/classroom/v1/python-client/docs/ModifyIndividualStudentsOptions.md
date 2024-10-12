# ModifyIndividualStudentsOptions

Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_student_ids** | **List[str]** | IDs of students to be added as having access to this coursework/announcement. | [optional] 
**remove_student_ids** | **List[str]** | IDs of students to be removed from having access to this coursework/announcement. | [optional] 

## Example

```python
from openapi_client.models.modify_individual_students_options import ModifyIndividualStudentsOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyIndividualStudentsOptions from a JSON string
modify_individual_students_options_instance = ModifyIndividualStudentsOptions.from_json(json)
# print the JSON string representation of the object
print(ModifyIndividualStudentsOptions.to_json())

# convert the object into a dict
modify_individual_students_options_dict = modify_individual_students_options_instance.to_dict()
# create an instance of ModifyIndividualStudentsOptions from a dict
modify_individual_students_options_from_dict = ModifyIndividualStudentsOptions.from_dict(modify_individual_students_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


