# APIDistrictListRank


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district_list** | [**List[APIDistrict1Summary]**](APIDistrict1Summary.md) |  | [optional] 
**number_of_districts** | **int** | The total count of districts in the entire rank list | [optional] 
**number_of_pages** | **int** | The total count of pages in your query list based on given per_page value | [optional] 
**rank_compare_year** | **int** |  | [optional] 
**rank_year** | **int** | Year this ranking list represents (2018 &#x3D; 2017-18) | [optional] 
**rank_year_compare** | **int** | Year rankings returned for comparison (2018 &#x3D; 2017-18) | [optional] 
**rank_years_available** | **List[int]** | The years for which SchoolDigger district rankings are available for this state | [optional] 

## Example

```python
from openapi_client.models.api_district_list_rank import APIDistrictListRank

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrictListRank from a JSON string
api_district_list_rank_instance = APIDistrictListRank.from_json(json)
# print the JSON string representation of the object
print(APIDistrictListRank.to_json())

# convert the object into a dict
api_district_list_rank_dict = api_district_list_rank_instance.to_dict()
# create an instance of APIDistrictListRank from a dict
api_district_list_rank_from_dict = APIDistrictListRank.from_dict(api_district_list_rank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


