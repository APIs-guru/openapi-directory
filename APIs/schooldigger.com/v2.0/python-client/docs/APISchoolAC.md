# APISchoolAC


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | School location city | [optional] 
**has_boundary** | **bool** | States whether there is an attendance boundary available for this school | [optional] 
**high_grade** | **str** | The high grade served by this school | [optional] 
**latitude** | **float** | School location latitude | [optional] 
**longitude** | **float** | School location longitude | [optional] 
**low_grade** | **str** | The low grade served by this school (PK &#x3D; Prekindergarten, K &#x3D; Kindergarten) | [optional] 
**rank** | **int** | Statewide rank of this School | [optional] 
**rank_of** | **int** | Count of schools ranked at this state/level | [optional] 
**rank_stars** | **int** | The number of stars SchoolDigger awarded in the ranking of the school (0-5, 5 is best) | [optional] 
**school_level** | **str** | The level of school (Elementary, Middle, High, Private, Alternative) | [optional] 
**school_name** | **str** | School name | [optional] 
**schoolid** | **str** | SchoolDigger School ID Number (12 digits). Use /schools/{schoolID} to retrieve the full school record | [optional] 
**state** | **str** | School location state | [optional] 
**zip** | **str** | School location zip code | [optional] 

## Example

```python
from openapi_client.models.api_school_ac import APISchoolAC

# TODO update the JSON string below
json = "{}"
# create an instance of APISchoolAC from a JSON string
api_school_ac_instance = APISchoolAC.from_json(json)
# print the JSON string representation of the object
print(APISchoolAC.to_json())

# convert the object into a dict
api_school_ac_dict = api_school_ac_instance.to_dict()
# create an instance of APISchoolAC from a dict
api_school_ac_from_dict = APISchoolAC.from_dict(api_school_ac_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


