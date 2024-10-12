# PublishedProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfLinks**](PAMAssetCategoriesAllOfLinks.md) |  | [optional] 
**current_page** | **int** | Current page number | [optional] 
**embedded** | [**PublishedProductsAllOfEmbedded**](PublishedProductsAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.published_products import PublishedProducts

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedProducts from a JSON string
published_products_instance = PublishedProducts.from_json(json)
# print the JSON string representation of the object
print(PublishedProducts.to_json())

# convert the object into a dict
published_products_dict = published_products_instance.to_dict()
# create an instance of PublishedProducts from a dict
published_products_from_dict = PublishedProducts.from_dict(published_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


