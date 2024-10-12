# ClassDetailsClever

Clever.com section-related information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the section on clever | [optional] 
**id** | **str** | Clever section unique identifier | [optional] 
**modification_date** | **datetime** | The last modification date of the section on clever | [optional] 
**subject** | **str** | Normalized subject of the course | [optional] 
**term_end_date** | **datetime** | End date of the term | [optional] 
**term_name** | **str** | Name of the term when this course happens | [optional] 
**term_start_date** | **datetime** | Beginning date of the term | [optional] 

## Example

```python
from openapi_client.models.class_details_clever import ClassDetailsClever

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsClever from a JSON string
class_details_clever_instance = ClassDetailsClever.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsClever.to_json())

# convert the object into a dict
class_details_clever_dict = class_details_clever_instance.to_dict()
# create an instance of ClassDetailsClever from a dict
class_details_clever_from_dict = ClassDetailsClever.from_dict(class_details_clever_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


