# APIDistrictListRank2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district_list** | [**List[APIDistrict2Summary]**](APIDistrict2Summary.md) |  | [optional] 
**number_of_districts** | **int** | The total count of districts in the entire rank list | [optional] 
**number_of_pages** | **int** | The total count of pages in your query list based on given per_page value | [optional] 
**rank_compare_year** | **int** |  | [optional] 
**rank_year** | **int** | Year this ranking list represents (2018 &#x3D; 2017-18) | [optional] 
**rank_year_compare** | **int** | Year rankings returned for comparison (2018 &#x3D; 2017-18) | [optional] 
**rank_years_available** | **List[int]** | The years for which SchoolDigger district rankings are available for this state | [optional] 

## Example

```python
from openapi_client.models.api_district_list_rank2 import APIDistrictListRank2

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrictListRank2 from a JSON string
api_district_list_rank2_instance = APIDistrictListRank2.from_json(json)
# print the JSON string representation of the object
print(APIDistrictListRank2.to_json())

# convert the object into a dict
api_district_list_rank2_dict = api_district_list_rank2_instance.to_dict()
# create an instance of APIDistrictListRank2 from a dict
api_district_list_rank2_from_dict = APIDistrictListRank2.from_dict(api_district_list_rank2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


