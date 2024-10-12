# GradeCategory

Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_grade_denominator** | **int** | Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS. | [optional] 
**id** | **str** | ID of the grade category. | [optional] 
**name** | **str** | Name of the grade category. | [optional] 
**weight** | **int** | The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES. | [optional] 

## Example

```python
from openapi_client.models.grade_category import GradeCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GradeCategory from a JSON string
grade_category_instance = GradeCategory.from_json(json)
# print the JSON string representation of the object
print(GradeCategory.to_json())

# convert the object into a dict
grade_category_dict = grade_category_instance.to_dict()
# create an instance of GradeCategory from a dict
grade_category_from_dict = GradeCategory.from_dict(grade_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


