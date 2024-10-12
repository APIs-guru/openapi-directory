# School

RETS MLS School Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district** | **str** | School district name. | [optional] 
**elementary_school** | **str** | Elementary school name. | [optional] 
**high_school** | **str** | High school name | [optional] 
**middle_school** | **str** | Middle or junior school name | [optional] 

## Example

```python
from openapi_client.models.school import School

# TODO update the JSON string below
json = "{}"
# create an instance of School from a JSON string
school_instance = School.from_json(json)
# print the JSON string representation of the object
print(School.to_json())

# convert the object into a dict
school_dict = school_instance.to_dict()
# create an instance of School from a dict
school_from_dict = School.from_dict(school_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


