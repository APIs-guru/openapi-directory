# GradebookSettings

The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** | **str** | Indicates how the overall grade is calculated. | [optional] 
**display_setting** | **str** | Indicates who can see the overall grade.. | [optional] 
**grade_categories** | [**List[GradeCategory]**](GradeCategory.md) | Grade categories that are available for coursework in the course. | [optional] 

## Example

```python
from openapi_client.models.gradebook_settings import GradebookSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GradebookSettings from a JSON string
gradebook_settings_instance = GradebookSettings.from_json(json)
# print the JSON string representation of the object
print(GradebookSettings.to_json())

# convert the object into a dict
gradebook_settings_dict = gradebook_settings_instance.to_dict()
# create an instance of GradebookSettings from a dict
gradebook_settings_from_dict = GradebookSettings.from_dict(gradebook_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


