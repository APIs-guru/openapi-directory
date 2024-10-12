# APIDistrict12


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**APILocation**](APILocation.md) |  | [optional] 
**boundary** | [**APIBoundary12**](APIBoundary12.md) |  | [optional] 
**county** | [**APICounty**](APICounty.md) |  | [optional] 
**district_id** | **str** | SchoolDigger District ID Number (7 digits) | [optional] 
**district_name** | **str** | District name | [optional] 
**district_yearly_details** | [**List[APILEAYearlyDetail]**](APILEAYearlyDetail.md) | District yearly metrics | [optional] 
**high_grade** | **str** | The high grade served by this district | [optional] 
**is_within_boundary** | **bool** | Indicates whether this district&#39;s boundary includes the specified location from nearLatitude/nearLongitude | [optional] 
**low_grade** | **str** | The low grade served by this district (PK &#x3D; Prekindergarten, K &#x3D; Kindergarten) | [optional] 
**number_alternative_schools** | **int** |  | [optional] 
**number_high_schools** | **int** |  | [optional] 
**number_middle_schools** | **int** |  | [optional] 
**number_primary_schools** | **int** |  | [optional] 
**number_total_schools** | **int** |  | [optional] 
**phone** | **str** | District phone number | [optional] 
**rank_history** | [**List[APILEARankHistory]**](APILEARankHistory.md) | SchoolDigger yearly rank history of the district | [optional] 
**test_scores** | [**List[APITestScoreWrapper]**](APITestScoreWrapper.md) | Test scores (district and state) -- requires Pro or Enterprise level API subscription | [optional] 
**url** | **str** | SchoolDigger URL for this district | [optional] 

## Example

```python
from openapi_client.models.api_district12 import APIDistrict12

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrict12 from a JSON string
api_district12_instance = APIDistrict12.from_json(json)
# print the JSON string representation of the object
print(APIDistrict12.to_json())

# convert the object into a dict
api_district12_dict = api_district12_instance.to_dict()
# create an instance of APIDistrict12 from a dict
api_district12_from_dict = APIDistrict12.from_dict(api_district12_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


