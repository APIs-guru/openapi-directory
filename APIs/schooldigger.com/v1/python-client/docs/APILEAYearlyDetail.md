# APILEAYearlyDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_aids** | **float** | Number of full-time equivalent instructional aids employed by the district | [optional] 
**number_of_coords_supervisors** | **float** | Number of full-time equivalent instructional coordinators/supervisors employed by the district | [optional] 
**number_of_english_language_learner_students** | **int** | The number of English language learner (ELL) students served in appropriate programs | [optional] 
**number_of_guidance_elem** | **float** | Number of full-time equivalent elementary guidance counselors employed by the district | [optional] 
**number_of_guidance_secondary** | **float** | Number of full-time equivalent secondary guidance counselors employed by the district | [optional] 
**number_of_guidance_total** | **float** | Total number of full-time equivalent guidance counselors employed by the district | [optional] 
**number_of_lea_administrators** | **float** | Number of full-time equivalent LEA administrators employed by the district (LEA) | [optional] 
**number_of_lea_support_staff** | **float** | Number of full-time equivalent LEA administrative support staff employed by the district (LEA) | [optional] 
**number_of_librarians** | **float** | Number of full-time equivalent librarians/media specialists employed by the district | [optional] 
**number_of_library_staff** | **float** | Number of full-time equivalent librarians/media support staff employed by the district | [optional] 
**number_of_other_support_staff** | **float** | Number of full-time equivalent all other support staff employed by the district (LEA) | [optional] 
**number_of_school_admin_support_staff** | **float** | Number of full-time equivalent school administrative support staff employed by the district (LEA) | [optional] 
**number_of_school_administrators** | **float** | Number of full-time equivalent school administrators employed by the district (LEA) | [optional] 
**number_of_special_ed_students** | **int** | The number of students having a written Individualized Education Program (IEP) under the Individuals With Disabilities Education Act (IDEA) | [optional] 
**number_of_student_support_staff** | **float** | Number of full-time equivalent student support services staff employed by the district (LEA) | [optional] 
**number_of_students** | **int** | Number of students enrolled in the district | [optional] 
**number_of_teachers** | **float** | Number of full-time equivalent teachers employed by the district | [optional] 
**number_of_teachers_elementary** | **float** | Number of full-time equivalent elementary teachers employed by the district | [optional] 
**number_of_teachers_k** | **float** | Number of full-time equivalent kindergarten teachers employed by the district | [optional] 
**number_of_teachers_pk** | **float** | Number of full-time equivalent pre-kindergarten teachers employed by the district | [optional] 
**number_of_teachers_secondary** | **float** | Number of full-time equivalent secondary teachers employed by the district | [optional] 
**year** | **int** | School year (2018 &#x3D; 2017-18) | [optional] 

## Example

```python
from openapi_client.models.apilea_yearly_detail import APILEAYearlyDetail

# TODO update the JSON string below
json = "{}"
# create an instance of APILEAYearlyDetail from a JSON string
apilea_yearly_detail_instance = APILEAYearlyDetail.from_json(json)
# print the JSON string representation of the object
print(APILEAYearlyDetail.to_json())

# convert the object into a dict
apilea_yearly_detail_dict = apilea_yearly_detail_instance.to_dict()
# create an instance of APILEAYearlyDetail from a dict
apilea_yearly_detail_from_dict = APILEAYearlyDetail.from_dict(apilea_yearly_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


