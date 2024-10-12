# ProductRecommendation

This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epid** | **str** | This field will return the eBay Product ID {ePID) of an eBay Catalog product that eBay recommends that the seller use to make their listing compliant. Note: Product Adoption is not enforced at this time. Product Adoption violations are no longer returned. | [optional] 

## Example

```python
from openapi_client.models.product_recommendation import ProductRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of ProductRecommendation from a JSON string
product_recommendation_instance = ProductRecommendation.from_json(json)
# print the JSON string representation of the object
print(ProductRecommendation.to_json())

# convert the object into a dict
product_recommendation_dict = product_recommendation_instance.to_dict()
# create an instance of ProductRecommendation from a dict
product_recommendation_from_dict = ProductRecommendation.from_dict(product_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


