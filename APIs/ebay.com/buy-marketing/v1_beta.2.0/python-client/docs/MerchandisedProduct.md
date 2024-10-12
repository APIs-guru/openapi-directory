# MerchandisedProduct

The type that defines the fields for product information, including price, condition, ratings, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rating** | **str** | The average rating for the product based on eBay user ratings. | [optional] 
**epid** | **str** | The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API &lt;b&gt;search&lt;/b&gt; method to retrieve items for this product. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**market_price_details** | [**List[MarketPriceDetail]**](MarketPriceDetail.md) | An array of containers for the product market price details, such as condition and market price. | [optional] 
**rating_aspects** | [**List[RatingAspect]**](RatingAspect.md) | An array of containers for ratings of the product aspects, such as \&quot;Is it a good value\&quot;. | [optional] 
**rating_count** | **int** | The total number of eBay users that rated the product. | [optional] 
**review_count** | **int** | The total number of eBay users that wrote a review for the product.  | [optional] 
**title** | **str** | The title of the product. | [optional] 

## Example

```python
from openapi_client.models.merchandised_product import MerchandisedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of MerchandisedProduct from a JSON string
merchandised_product_instance = MerchandisedProduct.from_json(json)
# print the JSON string representation of the object
print(MerchandisedProduct.to_json())

# convert the object into a dict
merchandised_product_dict = merchandised_product_instance.to_dict()
# create an instance of MerchandisedProduct from a dict
merchandised_product_from_dict = MerchandisedProduct.from_dict(merchandised_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


