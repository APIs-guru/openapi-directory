# APIDistrict2Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**APILocation**](APILocation.md) |  | [optional] 
**county** | [**APICounty**](APICounty.md) |  | [optional] 
**distance** | **float** | Distance from nearLatitude/nearLongitude (if supplied) | [optional] 
**district_id** | **str** | SchoolDigger District ID Number (7 digits). Use /districts/{districtID} to retrieve the entire district record | [optional] 
**district_name** | **str** | District name | [optional] 
**district_yearly_details** | [**List[APILEAYearlyDetail]**](APILEAYearlyDetail.md) | District yearly metrics | [optional] 
**has_boundary** | **bool** | Indicates that an attendance boundary is available for this district. (To retrieve, look up district with /districts/{id}) | [optional] 
**high_grade** | **str** | The high grade served by this district | [optional] 
**is_within_boundary** | **bool** | Indicates whether this district&#39;s boundary includes the specified location from nearLatitude/nearLongitude | [optional] 
**location_is_within_boundary** | **bool** | Indicates whether this school&#39;s boundary includes the specified location from nearLatitude/nearLongitude or boundaryAddress (Enterprise API level) | [optional] 
**low_grade** | **str** | The low grade served by this district (PK &#x3D; Prekindergarten, K &#x3D; Kindergarten) | [optional] 
**number_alternative_schools** | **int** | Count of schools designated as other/alternative schools | [optional] 
**number_high_schools** | **int** | Count of schools designated as high schools | [optional] 
**number_middle_schools** | **int** | Count of schools designated as middle schools | [optional] 
**number_primary_schools** | **int** | Count of schools designated as primary schools | [optional] 
**number_total_schools** | **int** | Count of schools in the district | [optional] 
**phone** | **str** | District phone number | [optional] 
**rank_history** | [**List[APILEARankHistory]**](APILEARankHistory.md) | SchoolDigger yearly rank history of the district | [optional] 
**url** | **str** | SchoolDigger URL for this district | [optional] 

## Example

```python
from openapi_client.models.api_district2_summary import APIDistrict2Summary

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrict2Summary from a JSON string
api_district2_summary_instance = APIDistrict2Summary.from_json(json)
# print the JSON string representation of the object
print(APIDistrict2Summary.to_json())

# convert the object into a dict
api_district2_summary_dict = api_district2_summary_instance.to_dict()
# create an instance of APIDistrict2Summary from a dict
api_district2_summary_from_dict = APIDistrict2Summary.from_dict(api_district2_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


