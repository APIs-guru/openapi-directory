# HistoryResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**VehHistoryData**](VehHistoryData.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.history_resp import HistoryResp

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryResp from a JSON string
history_resp_instance = HistoryResp.from_json(json)
# print the JSON string representation of the object
print(HistoryResp.to_json())

# convert the object into a dict
history_resp_dict = history_resp_instance.to_dict()
# create an instance of HistoryResp from a dict
history_resp_from_dict = HistoryResp.from_dict(history_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


