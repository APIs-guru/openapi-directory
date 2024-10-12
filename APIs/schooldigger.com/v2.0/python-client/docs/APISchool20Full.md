# APISchool20Full


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**APILocation**](APILocation.md) |  | [optional] 
**county** | [**APICounty**](APICounty.md) |  | [optional] 
**district** | [**APIDistrictSum**](APIDistrictSum.md) |  | [optional] 
**finance** | [**List[APISchoolFinance]**](APISchoolFinance.md) | School finance (Pro and Enterprise API level only) | [optional] 
**high_grade** | **str** | The high grade served by this school | [optional] 
**is_charter_school** | **str** | Indicates if school is a charter school (Yes/No/n-a) | [optional] 
**is_magnet_school** | **str** | Indicates if school is a magnet school (Yes/No/n-a) | [optional] 
**is_private** | **bool** | Indicates if school is a private school (Yes/No) | [optional] 
**is_title_i_school** | **str** | Indicates if school is a Title I school (Yes/No/n-a) | [optional] 
**is_title_i_schoolwide_school** | **str** | Indicates if a school-wide Title I school (Yes/No/n-a) | [optional] 
**is_virtual_school** | **str** | Indicates if school is a virtual school (Yes/No/n-a) | [optional] 
**locale** | **str** | NCES Locale of school (https://nces.ed.gov/ccd/rural_locales.asp) | [optional] 
**low_grade** | **str** | The low grade served by this school (PK &#x3D; Prekindergarten, K &#x3D; Kindergarten) | [optional] 
**phone** | **str** | School phone number | [optional] 
**private_coed** | **str** | Coed/Boys/Girls (private schools only) | [optional] 
**private_days** | **int** | Days in the school year (private schools only) | [optional] 
**private_has_library** | **bool** | Indicates if the school has a library (private schools only) | [optional] 
**private_hours** | **float** | Hours in the school day (private schools only) | [optional] 
**private_orientation** | **str** | Affiliation of the school (private schools only) | [optional] 
**rank_history** | [**List[APIRankHistory]**](APIRankHistory.md) | SchoolDigger yearly rank history of the school | [optional] 
**rank_movement** | **int** | Returns the movement of rank for this school between current and previous year | [optional] 
**reviews** | [**List[APISchoolReview]**](APISchoolReview.md) | List of reviews for this school submitted by SchoolDigger site visitors | [optional] 
**school_level** | **str** | The level of school (Elementary, Middle, High, Private, Alternative) | [optional] 
**school_name** | **str** | School name | [optional] 
**school_yearly_details** | [**List[APIYearlyDemographics]**](APIYearlyDemographics.md) | School Yearly metrics | [optional] 
**schoolid** | **str** | SchoolDigger School ID Number (12 digits) | [optional] 
**test_scores** | [**List[APITestScoreWrapper]**](APITestScoreWrapper.md) | Test scores (including district and state) -- requires Pro or Enterprise level API subscription | [optional] 
**url** | **str** | URL of the school&#39;s public website | [optional] 
**url_compare_school_digger** | **str** | SchoolDigger URL for comparing this school to nearby schools | [optional] 
**url_school_digger** | **str** | SchoolDigger URL for this school | [optional] 

## Example

```python
from openapi_client.models.api_school20_full import APISchool20Full

# TODO update the JSON string below
json = "{}"
# create an instance of APISchool20Full from a JSON string
api_school20_full_instance = APISchool20Full.from_json(json)
# print the JSON string representation of the object
print(APISchool20Full.to_json())

# convert the object into a dict
api_school20_full_dict = api_school20_full_instance.to_dict()
# create an instance of APISchool20Full from a dict
api_school20_full_from_dict = APISchool20Full.from_dict(api_school20_full_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


