# CourseDesign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The time this entry was created | [optional] 
**created_by** | **str** | UUID of the user that created this entry. | [optional] 
**description** | **str** | Course description | [optional] 
**enabled** | **bool** | True if this design is enabled for use | 
**locale** | **str** | BCP-47 locale | 
**locked** | **datetime** | The time when this entry was locked or null | [optional] 
**locked_by** | **str** | UUID of the user that has locked this design | [optional] 
**locked_design** | **bool** | True if this design is locked for editing | 
**name** | **str** | The name | 
**softid** | **str** | The soft identifier | [optional] 
**sticky** | **bool** | True if this design is sticky | 
**tags** | **List[str]** | Course tags | [optional] 

## Example

```python
from openapi_client.models.course_design import CourseDesign

# TODO update the JSON string below
json = "{}"
# create an instance of CourseDesign from a JSON string
course_design_instance = CourseDesign.from_json(json)
# print the JSON string representation of the object
print(CourseDesign.to_json())

# convert the object into a dict
course_design_dict = course_design_instance.to_dict()
# create an instance of CourseDesign from a dict
course_design_from_dict = CourseDesign.from_dict(course_design_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


