# BestSold


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Quantity sold. | [optional] 
**product_id** | **int** |  | [optional] 
**product_name** | **str** |  | [optional] 
**total** | **float** | Total sold amount. | [optional] 

## Example

```python
from openapi_client.models.best_sold import BestSold

# TODO update the JSON string below
json = "{}"
# create an instance of BestSold from a JSON string
best_sold_instance = BestSold.from_json(json)
# print the JSON string representation of the object
print(BestSold.to_json())

# convert the object into a dict
best_sold_dict = best_sold_instance.to_dict()
# create an instance of BestSold from a dict
best_sold_from_dict = BestSold.from_dict(best_sold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


