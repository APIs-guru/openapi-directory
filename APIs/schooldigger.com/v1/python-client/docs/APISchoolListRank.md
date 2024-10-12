# APISchoolListRank


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_pages** | **int** | The total count of pages this ranking list based on given per_page value | [optional] 
**number_of_schools** | **int** | The total count of schools in this ranking list | [optional] 
**rank_year** | **int** | Year this ranking list represents (2018 &#x3D; 2017-18) | [optional] 
**rank_year_compare** | **int** | Year rankings returned for comparison (2018 &#x3D; 2017-18) | [optional] 
**rank_years_available** | **List[int]** | The years for which SchoolDigger rankings are available for this state and level | [optional] 
**school_list** | [**List[APISchool1Summary]**](APISchool1Summary.md) | The schools in the ranking list | [optional] 

## Example

```python
from openapi_client.models.api_school_list_rank import APISchoolListRank

# TODO update the JSON string below
json = "{}"
# create an instance of APISchoolListRank from a JSON string
api_school_list_rank_instance = APISchoolListRank.from_json(json)
# print the JSON string representation of the object
print(APISchoolListRank.to_json())

# convert the object into a dict
api_school_list_rank_dict = api_school_list_rank_instance.to_dict()
# create an instance of APISchoolListRank from a dict
api_school_list_rank_from_dict = APISchoolListRank.from_dict(api_school_list_rank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


