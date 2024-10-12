# PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** | Array of groups codes with which the published product is in relation | [optional] 
**product_models** | **List[str]** | Array of product model codes with which the product is in relation (only available since the v2.1) | [optional] 
**products** | **List[str]** | Array of published product identifiers with which the published product is in relation | [optional] 

## Example

```python
from openapi_client.models.published_products_all_of_embedded_items_inner_all_of_associations_association_type_code import PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode from a JSON string
published_products_all_of_embedded_items_inner_all_of_associations_association_type_code_instance = PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode.from_json(json)
# print the JSON string representation of the object
print(PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode.to_json())

# convert the object into a dict
published_products_all_of_embedded_items_inner_all_of_associations_association_type_code_dict = published_products_all_of_embedded_items_inner_all_of_associations_association_type_code_instance.to_dict()
# create an instance of PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode from a dict
published_products_all_of_embedded_items_inner_all_of_associations_association_type_code_from_dict = PublishedProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode.from_dict(published_products_all_of_embedded_items_inner_all_of_associations_association_type_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


