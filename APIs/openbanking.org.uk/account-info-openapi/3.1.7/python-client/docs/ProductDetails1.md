# ProductDetails1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_maximum_charge** | **str** | The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Core product details | [optional] 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to PCA products, they are segmented in relation to different markets that they wish to focus on.  | [optional] 

## Example

```python
from openapi_client.models.product_details1 import ProductDetails1

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDetails1 from a JSON string
product_details1_instance = ProductDetails1.from_json(json)
# print the JSON string representation of the object
print(ProductDetails1.to_json())

# convert the object into a dict
product_details1_dict = product_details1_instance.to_dict()
# create an instance of ProductDetails1 from a dict
product_details1_from_dict = ProductDetails1.from_dict(product_details1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


