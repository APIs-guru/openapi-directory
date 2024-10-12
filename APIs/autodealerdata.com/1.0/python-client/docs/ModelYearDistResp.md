# ModelYearDistResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[ModelYearDistEntry]**](ModelYearDistEntry.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_year_dist_resp import ModelYearDistResp

# TODO update the JSON string below
json = "{}"
# create an instance of ModelYearDistResp from a JSON string
model_year_dist_resp_instance = ModelYearDistResp.from_json(json)
# print the JSON string representation of the object
print(ModelYearDistResp.to_json())

# convert the object into a dict
model_year_dist_resp_dict = model_year_dist_resp_instance.to_dict()
# create an instance of ModelYearDistResp from a dict
model_year_dist_resp_from_dict = ModelYearDistResp.from_dict(model_year_dist_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


