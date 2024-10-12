# RegionResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | **List[str]** |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.region_resp import RegionResp

# TODO update the JSON string below
json = "{}"
# create an instance of RegionResp from a JSON string
region_resp_instance = RegionResp.from_json(json)
# print the JSON string representation of the object
print(RegionResp.to_json())

# convert the object into a dict
region_resp_dict = region_resp_instance.to_dict()
# create an instance of RegionResp from a dict
region_resp_from_dict = RegionResp.from_dict(region_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


