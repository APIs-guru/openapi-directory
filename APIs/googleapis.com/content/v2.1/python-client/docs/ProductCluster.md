# ProductCluster

Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Brand of the product cluster. | [optional] 
**brand_inventory_status** | **str** | Tells if there is at least one product of the brand currently &#x60;IN_STOCK&#x60; in your product feed across multiple countries, all products are &#x60;OUT_OF_STOCK&#x60; in your product feed, or &#x60;NOT_IN_INVENTORY&#x60;. The field doesn&#39;t take the Best Sellers report country filter into account. | [optional] 
**category_l1** | **str** | Product category (1st level) of the product cluster, represented in Google&#39;s product taxonomy. | [optional] 
**category_l2** | **str** | Product category (2nd level) of the product cluster, represented in Google&#39;s product taxonomy. | [optional] 
**category_l3** | **str** | Product category (3rd level) of the product cluster, represented in Google&#39;s product taxonomy. | [optional] 
**category_l4** | **str** | Product category (4th level) of the product cluster, represented in Google&#39;s product taxonomy. | [optional] 
**category_l5** | **str** | Product category (5th level) of the product cluster, represented in Google&#39;s product taxonomy. | [optional] 
**inventory_status** | **str** | Tells whether the product cluster is &#x60;IN_STOCK&#x60; in your product feed across multiple countries, &#x60;OUT_OF_STOCK&#x60; in your product feed, or &#x60;NOT_IN_INVENTORY&#x60; at all. The field doesn&#39;t take the Best Sellers report country filter into account. | [optional] 
**title** | **str** | Title of the product cluster. | [optional] 
**variant_gtins** | **List[str]** | GTINs of example variants of the product cluster. | [optional] 

## Example

```python
from openapi_client.models.product_cluster import ProductCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCluster from a JSON string
product_cluster_instance = ProductCluster.from_json(json)
# print the JSON string representation of the object
print(ProductCluster.to_json())

# convert the object into a dict
product_cluster_dict = product_cluster_instance.to_dict()
# create an instance of ProductCluster from a dict
product_cluster_from_dict = ProductCluster.from_dict(product_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


