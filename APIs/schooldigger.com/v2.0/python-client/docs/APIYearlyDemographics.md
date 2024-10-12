# APIYearlyDemographics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_students** | **int** | Count of students attending the school | [optional] 
**numberof_african_american_students** | **int** | NCES definition: A person having origins in any of the black racial groups of Africa.  (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_asian_students** | **int** | NCES definition: A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.  (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_hispanic_students** | **int** | NCES definition: A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race. (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_indian_students** | **int** | NCES definition: A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_pacific_islander_students** | **int** | NCES definition: A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands. (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_two_or_more_race_students** | **int** | NCES definition: Includes any combination of two or more races and not Hispanic/Latino ethnicity. (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**numberof_unspecified_race_students** | **int** |  | [optional] 
**numberof_white_students** | **int** | NCES definition: A person having origins in any of the original peoples of Europe, the Middle East, or North Africa. (https://nces.ed.gov/statprog/2002/std1_5.asp) | [optional] 
**percent_free_disc_lunch** | **float** | Percent of students receiving a free or discounted lunch in the National School Lunch Program | [optional] 
**percentof_african_american_students** | **float** |  | [optional] 
**percentof_asian_students** | **float** |  | [optional] 
**percentof_hispanic_students** | **float** |  | [optional] 
**percentof_indian_students** | **float** |  | [optional] 
**percentof_pacific_islander_students** | **float** |  | [optional] 
**percentof_two_or_more_race_students** | **float** |  | [optional] 
**percentof_unspecified_race_students** | **float** |  | [optional] 
**percentof_white_students** | **float** |  | [optional] 
**pupil_teacher_ratio** | **float** | Number of students / number of full-time equivalent teachers | [optional] 
**teachers_fulltime** | **float** | Number of full-time equivalent teachers employed at the school | [optional] 
**year** | **int** | School year (2018 &#x3D; 2017-18) | [optional] 

## Example

```python
from openapi_client.models.api_yearly_demographics import APIYearlyDemographics

# TODO update the JSON string below
json = "{}"
# create an instance of APIYearlyDemographics from a JSON string
api_yearly_demographics_instance = APIYearlyDemographics.from_json(json)
# print the JSON string representation of the object
print(APIYearlyDemographics.to_json())

# convert the object into a dict
api_yearly_demographics_dict = api_yearly_demographics_instance.to_dict()
# create an instance of APIYearlyDemographics from a dict
api_yearly_demographics_from_dict = APIYearlyDemographics.from_dict(api_yearly_demographics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


