# PromotionFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begins_at** | **str** | Creation date of the promotion (requires &#39;lasts&#39; param - &#39;date&#39;) | [optional] 
**categories** | [**List[Id]**](Id.md) | Products Categories where the promotion will be applied (requires &#39;discount_target&#39; param - &#39;categories&#39;) | [optional] 
**code** | **str** | Code of the promotion | [optional] 
**condition_price** | **float** | Minimum order amount to validate the promotion | [optional] 
**condition_qty** | **int** | Minimum quantity of ordered itens to validate the promotion | [optional] 
**cumulative** | **bool** | True if the promotion can be acumulated with others | [optional] [default to False]
**customer_categories** | [**List[Id]**](Id.md) | Customer Categories to whom the promotion will be applied (requires &#39;customers&#39; param - &#39;categories&#39;) | [optional] 
**discount_amount_fix** | **float** | Fixed discount amount of the promotion | [optional] 
**discount_amount_percent** | **float** | Percentual discount amount of the promotion | [optional] 
**discount_target** | **str** | Where the promotion will be applied (&#39;order&#39;, &#39;shipping&#39;, &#39;categories&#39;, &#39;buy_x_get_y) | [optional] 
**enabled** | **bool** | If the promotion is currently enabled | [optional] [default to True]
**expires_at** | **str** | Expiration date of the promotion (requires &#39;lasts&#39; param - &#39;date&#39;) | [optional] 
**id** | **int** | Unique identifier of the product | [optional] 
**lasts** | **str** | Controls when the promotion will expire (&#39;none&#39;, &#39;date&#39;, &#39;max_times_used&#39;) | [optional] 
**max_times_used** | **int** | Maximum amount a promotion can be used (requires &#39;lasts&#39; param - &#39;max_times_used&#39;) | [optional] 
**name** | **str** | Name of the product | [optional] 
**products** | [**List[Id]**](Id.md) | Products where the promotion will be applied (requires &#39;discount_target&#39; param - &#39;categories&#39; or &#39;buy_x_get_y&#39;) | [optional] 
**products_x** | [**List[Id]**](Id.md) | Products required to apply the promotion (requires &#39;discount_target&#39; param - &#39;buy_x_get_y&#39;) | [optional] 
**quantity_x** | **int** | Number of sets of products_x needed to be able to apply the promotion (requires &#39;discount_target&#39; param - &#39;buy_x_get_y&#39;) | [optional] 
**status** | **str** | Status of the promotion (&#39;active&#39;, &#39;expired&#39;) | [optional] 
**times_used** | **int** | Amount of times the promotion was used | [optional] 

## Example

```python
from openapi_client.models.promotion_fields import PromotionFields

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionFields from a JSON string
promotion_fields_instance = PromotionFields.from_json(json)
# print the JSON string representation of the object
print(PromotionFields.to_json())

# convert the object into a dict
promotion_fields_dict = promotion_fields_instance.to_dict()
# create an instance of PromotionFields from a dict
promotion_fields_from_dict = PromotionFields.from_dict(promotion_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


