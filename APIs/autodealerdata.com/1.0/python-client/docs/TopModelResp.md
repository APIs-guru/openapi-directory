# TopModelResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[TopModelEntry]**](TopModelEntry.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.top_model_resp import TopModelResp

# TODO update the JSON string below
json = "{}"
# create an instance of TopModelResp from a JSON string
top_model_resp_instance = TopModelResp.from_json(json)
# print the JSON string representation of the object
print(TopModelResp.to_json())

# convert the object into a dict
top_model_resp_dict = top_model_resp_instance.to_dict()
# create an instance of TopModelResp from a dict
top_model_resp_from_dict = TopModelResp.from_dict(top_model_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


