# ModelResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[ModelDict]**](ModelDict.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_resp import ModelResp

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResp from a JSON string
model_resp_instance = ModelResp.from_json(json)
# print the JSON string representation of the object
print(ModelResp.to_json())

# convert the object into a dict
model_resp_dict = model_resp_instance.to_dict()
# create an instance of ModelResp from a dict
model_resp_from_dict = ModelResp.from_dict(model_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


