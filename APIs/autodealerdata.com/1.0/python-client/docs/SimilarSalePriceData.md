# SimilarSalePriceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_back** | **int** |  | 
**mile_count** | **int** |  | 
**miles_avg** | **float** |  | 
**miles_std_dev** | **float** |  | 
**new_count** | **int** |  | 
**new_sale_avg** | **float** |  | 
**new_sale_std_dev** | **float** |  | 
**used_count** | **int** |  | 
**used_sale_avg** | **float** |  | 
**used_sale_std_dev** | **float** |  | 

## Example

```python
from openapi_client.models.similar_sale_price_data import SimilarSalePriceData

# TODO update the JSON string below
json = "{}"
# create an instance of SimilarSalePriceData from a JSON string
similar_sale_price_data_instance = SimilarSalePriceData.from_json(json)
# print the JSON string representation of the object
print(SimilarSalePriceData.to_json())

# convert the object into a dict
similar_sale_price_data_dict = similar_sale_price_data_instance.to_dict()
# create an instance of SimilarSalePriceData from a dict
similar_sale_price_data_from_dict = SimilarSalePriceData.from_dict(similar_sale_price_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


