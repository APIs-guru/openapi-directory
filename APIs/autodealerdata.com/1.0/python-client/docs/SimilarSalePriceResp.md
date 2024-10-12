# SimilarSalePriceResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**SimilarSalePriceData**](SimilarSalePriceData.md) |  | 
**end_date** | **date** |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 
**start_date** | **date** |  | 

## Example

```python
from openapi_client.models.similar_sale_price_resp import SimilarSalePriceResp

# TODO update the JSON string below
json = "{}"
# create an instance of SimilarSalePriceResp from a JSON string
similar_sale_price_resp_instance = SimilarSalePriceResp.from_json(json)
# print the JSON string representation of the object
print(SimilarSalePriceResp.to_json())

# convert the object into a dict
similar_sale_price_resp_dict = similar_sale_price_resp_instance.to_dict()
# create an instance of SimilarSalePriceResp from a dict
similar_sale_price_resp_from_dict = SimilarSalePriceResp.from_dict(similar_sale_price_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


