# RegionListByService200ResponseValueInner

Region profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_deleted** | **bool** | whether Region is deleted. | [optional] 
**is_master_region** | **bool** | whether Region is the master region. | [optional] 
**name** | **str** | Region name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.region_list_by_service200_response_value_inner import RegionListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of RegionListByService200ResponseValueInner from a JSON string
region_list_by_service200_response_value_inner_instance = RegionListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(RegionListByService200ResponseValueInner.to_json())

# convert the object into a dict
region_list_by_service200_response_value_inner_dict = region_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of RegionListByService200ResponseValueInner from a dict
region_list_by_service200_response_value_inner_from_dict = RegionListByService200ResponseValueInner.from_dict(region_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


