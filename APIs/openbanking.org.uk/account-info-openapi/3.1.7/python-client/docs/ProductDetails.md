# ProductDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_free_length** | **float** | The length/duration of the fee free period | [optional] 
**fee_free_length_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Core product details | [optional] 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  With respect to BCA products, they are segmented in relation to different markets that they wish to focus on.  | [optional] 

## Example

```python
from openapi_client.models.product_details import ProductDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDetails from a JSON string
product_details_instance = ProductDetails.from_json(json)
# print the JSON string representation of the object
print(ProductDetails.to_json())

# convert the object into a dict
product_details_dict = product_details_instance.to_dict()
# create an instance of ProductDetails from a dict
product_details_from_dict = ProductDetails.from_dict(product_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


