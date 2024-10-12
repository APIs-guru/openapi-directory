# Assessment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**mark_number** | **str** |  | [optional] 
**mark_type** | **str** |  | [optional] 
**open_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.assessment import Assessment

# TODO update the JSON string below
json = "{}"
# create an instance of Assessment from a JSON string
assessment_instance = Assessment.from_json(json)
# print the JSON string representation of the object
print(Assessment.to_json())

# convert the object into a dict
assessment_dict = assessment_instance.to_dict()
# create an instance of Assessment from a dict
assessment_from_dict = Assessment.from_dict(assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


