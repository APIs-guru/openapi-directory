# DealershipDataResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[DealershipData]**](DealershipData.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.dealership_data_resp import DealershipDataResp

# TODO update the JSON string below
json = "{}"
# create an instance of DealershipDataResp from a JSON string
dealership_data_resp_instance = DealershipDataResp.from_json(json)
# print the JSON string representation of the object
print(DealershipDataResp.to_json())

# convert the object into a dict
dealership_data_resp_dict = dealership_data_resp_instance.to_dict()
# create an instance of DealershipDataResp from a dict
dealership_data_resp_from_dict = DealershipDataResp.from_dict(dealership_data_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


