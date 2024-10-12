# CollectionFeaturedProduct

The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **str** | The unique identifier for the product item. | [optional] 
**x** | **float** | Required. X-coordinate of the product callout on the Shoppable Image. | [optional] 
**y** | **float** | Required. Y-coordinate of the product callout on the Shoppable Image. | [optional] 

## Example

```python
from openapi_client.models.collection_featured_product import CollectionFeaturedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionFeaturedProduct from a JSON string
collection_featured_product_instance = CollectionFeaturedProduct.from_json(json)
# print the JSON string representation of the object
print(CollectionFeaturedProduct.to_json())

# convert the object into a dict
collection_featured_product_dict = collection_featured_product_instance.to_dict()
# create an instance of CollectionFeaturedProduct from a dict
collection_featured_product_from_dict = CollectionFeaturedProduct.from_dict(collection_featured_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


