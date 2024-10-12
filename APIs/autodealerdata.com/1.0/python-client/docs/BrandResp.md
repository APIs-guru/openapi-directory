# BrandResp


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
from openapi_client.models.brand_resp import BrandResp

# TODO update the JSON string below
json = "{}"
# create an instance of BrandResp from a JSON string
brand_resp_instance = BrandResp.from_json(json)
# print the JSON string representation of the object
print(BrandResp.to_json())

# convert the object into a dict
brand_resp_dict = brand_resp_instance.to_dict()
# create an instance of BrandResp from a dict
brand_resp_from_dict = BrandResp.from_dict(brand_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


