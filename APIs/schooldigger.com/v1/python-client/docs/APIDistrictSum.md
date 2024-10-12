# APIDistrictSum

District Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district_id** | **str** | The 7 digit SchoolDigger District id number | [optional] 
**district_name** | **str** |  | [optional] 
**rank_url** | **str** | The URL to see the district in the SchoolDigger ranking list | [optional] 
**url** | **str** | The URL to see the district details on SchoolDigger | [optional] 

## Example

```python
from openapi_client.models.api_district_sum import APIDistrictSum

# TODO update the JSON string below
json = "{}"
# create an instance of APIDistrictSum from a JSON string
api_district_sum_instance = APIDistrictSum.from_json(json)
# print the JSON string representation of the object
print(APIDistrictSum.to_json())

# convert the object into a dict
api_district_sum_dict = api_district_sum_instance.to_dict()
# create an instance of APIDistrictSum from a dict
api_district_sum_from_dict = APIDistrictSum.from_dict(api_district_sum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


