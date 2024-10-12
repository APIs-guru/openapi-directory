# DealershipDataPaginatedResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**DealershipDataPaginated**](DealershipDataPaginated.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.dealership_data_paginated_resp import DealershipDataPaginatedResp

# TODO update the JSON string below
json = "{}"
# create an instance of DealershipDataPaginatedResp from a JSON string
dealership_data_paginated_resp_instance = DealershipDataPaginatedResp.from_json(json)
# print the JSON string representation of the object
print(DealershipDataPaginatedResp.to_json())

# convert the object into a dict
dealership_data_paginated_resp_dict = dealership_data_paginated_resp_instance.to_dict()
# create an instance of DealershipDataPaginatedResp from a dict
dealership_data_paginated_resp_from_dict = DealershipDataPaginatedResp.from_dict(dealership_data_paginated_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


