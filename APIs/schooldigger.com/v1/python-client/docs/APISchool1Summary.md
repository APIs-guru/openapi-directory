# APISchool1Summary

APISchool1Summary: A summary of a school record. For the full school record, call /schools/{id}

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**APILocation**](APILocation.md) |  | [optional] 
**county** | [**APICounty**](APICounty.md) |  | [optional] 
**distance** | **float** | Distance from nearLatitude/nearLongitude (if supplied) | [optional] 
**district** | [**APIDistrictSum**](APIDistrictSum.md) |  | [optional] 
**has_boundary** | **bool** | Indicates that an attendance boundary is available for this school. | [optional] 
**high_grade** | **str** | The high grade served by this school | [optional] 
**is_charter_school** | **str** | Indicates if school is a charter school (Yes/No/n-a) | [optional] 
**is_magnet_school** | **str** | Indicates if school is a magnet school (Yes/No/n-a) | [optional] 
**is_private** | **bool** | Indicates if school is a private school (Yes/No) | [optional] 
**is_title_i_school** | **str** | Indicates if school is a Title I school (Yes/No/n-a) | [optional] 
**is_title_i_schoolwide_school** | **str** | Indicates if a school-wide Title I school (Yes/No/n-a) | [optional] 
**is_virtual_school** | **str** | Indicates if school is a virtual school (Yes/No/n-a) | [optional] 
**location_is_within_boundary** | **bool** | Indicates whether this school&#39;s boundary includes the specified location from nearLatitude/nearLongitude or boundaryAddress. (Enterprise API level only) | [optional] 
**low_grade** | **str** | The low grade served by this school (PK &#x3D; Prekindergarten, K &#x3D; Kindergarten) | [optional] 
**phone** | **str** | School phone number | [optional] 
**private_coed** | **str** | Coed/Boys/Girls (private schools only) | [optional] 
**private_days** | **int** | Days in the school year (private schools only) | [optional] 
**private_has_library** | **bool** | Indicates if the school has a library (private schools only) | [optional] 
**private_hours** | **float** | Hours in the school day (private schools only) | [optional] 
**private_orientation** | **str** | Affiliation of the school (private schools only) | [optional] 
**rank_history** | [**List[APIRankHistory]**](APIRankHistory.md) | SchoolDigger yearly rank history of the school. To retrieve all years, call /schools/{id}. | [optional] 
**rank_movement** | **int** | Returns the movement of rank for this school between current and previous year | [optional] 
**school_level** | **str** | The level of school (Elementary, Middle, High, Private, Alternative) | [optional] 
**school_name** | **str** | School name | [optional] 
**school_yearly_details** | [**List[APIYearlyDemographics]**](APIYearlyDemographics.md) | School Yearly metrics. To retrieve all years, call /schools/{id}. | [optional] 
**schoolid** | **str** | SchoolDigger School ID Number (12 digits). Use /schools/{schoolID} to retrieve the full school record | [optional] 
**url** | **str** | SchoolDigger URL for this school | [optional] 
**url_compare** | **str** | SchoolDigger URL for comparing this school to others | [optional] 

## Example

```python
from openapi_client.models.api_school1_summary import APISchool1Summary

# TODO update the JSON string below
json = "{}"
# create an instance of APISchool1Summary from a JSON string
api_school1_summary_instance = APISchool1Summary.from_json(json)
# print the JSON string representation of the object
print(APISchool1Summary.to_json())

# convert the object into a dict
api_school1_summary_dict = api_school1_summary_instance.to_dict()
# create an instance of APISchool1Summary from a dict
api_school1_summary_from_dict = APISchool1Summary.from_dict(api_school1_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


