# PublishedProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associations** | [**PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociations**](PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociations.md) |  | [optional] 
**categories** | **List[str]** | Codes of the &lt;a href&#x3D;&#39;api-reference.html#Category&#39;&gt;categories&lt;/a&gt; in which the published product is classified | [optional] 
**created** | **str** | Date of creation | [optional] 
**enabled** | **bool** | Whether the published product is enable | [optional] [default to True]
**family** | **str** | &lt;a href&#x3D;&#39;api-reference.html#Family&#39;&gt;Family&lt;/a&gt; code from which the published product inherits its attributes and attributes requirements | [optional] [default to 'null']
**groups** | **List[str]** | Codes of the groups to which the published product belong | [optional] 
**identifier** | **str** | Published product identifier, i.e. the value of the only &#x60;pim_catalog_identifier&#x60; attribute | 
**quantified_associations** | **object** | Warning: associations with quantities are not compatible with the published products. The response will always be empty. | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**PublishedProductsAllOfEmbeddedItemsInnerAllOfValues**](PublishedProductsAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.published_product import PublishedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedProduct from a JSON string
published_product_instance = PublishedProduct.from_json(json)
# print the JSON string representation of the object
print(PublishedProduct.to_json())

# convert the object into a dict
published_product_dict = published_product_instance.to_dict()
# create an instance of PublishedProduct from a dict
published_product_from_dict = PublishedProduct.from_dict(published_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


