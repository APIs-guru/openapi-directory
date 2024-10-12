# ProductListingLevelInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_no** | **str** |  | 
**per_page** | **int** |  | 
**result** | [**List[ProductListingLevelInfoResultInner]**](ProductListingLevelInfoResultInner.md) | Multiple objects with product data. | 
**status** | **str** |  | 
**total_count** | **int** |  | 

## Example

```python
from openapi_client.models.product_listing_level_info import ProductListingLevelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListingLevelInfo from a JSON string
product_listing_level_info_instance = ProductListingLevelInfo.from_json(json)
# print the JSON string representation of the object
print(ProductListingLevelInfo.to_json())

# convert the object into a dict
product_listing_level_info_dict = product_listing_level_info_instance.to_dict()
# create an instance of ProductListingLevelInfo from a dict
product_listing_level_info_from_dict = ProductListingLevelInfo.from_dict(product_listing_level_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


