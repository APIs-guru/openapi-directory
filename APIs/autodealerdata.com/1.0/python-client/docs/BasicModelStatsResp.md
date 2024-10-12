# BasicModelStatsResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[BasicModelStats]**](BasicModelStats.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basic_model_stats_resp import BasicModelStatsResp

# TODO update the JSON string below
json = "{}"
# create an instance of BasicModelStatsResp from a JSON string
basic_model_stats_resp_instance = BasicModelStatsResp.from_json(json)
# print the JSON string representation of the object
print(BasicModelStatsResp.to_json())

# convert the object into a dict
basic_model_stats_resp_dict = basic_model_stats_resp_instance.to_dict()
# create an instance of BasicModelStatsResp from a dict
basic_model_stats_resp_from_dict = BasicModelStatsResp.from_dict(basic_model_stats_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


