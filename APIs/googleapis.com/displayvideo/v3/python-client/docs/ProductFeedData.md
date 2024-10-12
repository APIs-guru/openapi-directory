# ProductFeedData

The details of product feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_feed_disabled** | **bool** | Whether the product feed has opted-out of showing products. | [optional] 
**product_match_dimensions** | [**List[ProductMatchDimension]**](ProductMatchDimension.md) | A list of dimensions used to match products. | [optional] 
**product_match_type** | **str** | How products are selected by the product feed. | [optional] 

## Example

```python
from openapi_client.models.product_feed_data import ProductFeedData

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFeedData from a JSON string
product_feed_data_instance = ProductFeedData.from_json(json)
# print the JSON string representation of the object
print(ProductFeedData.to_json())

# convert the object into a dict
product_feed_data_dict = product_feed_data_instance.to_dict()
# create an instance of ProductFeedData from a dict
product_feed_data_from_dict = ProductFeedData.from_dict(product_feed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


