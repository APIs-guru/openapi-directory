# Products2AllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**associations** | [**Products2AllOfEmbeddedItemsInnerAllOfAssociations**](Products2AllOfEmbeddedItemsInnerAllOfAssociations.md) |  | [optional] 
**categories** | **List[str]** | Codes of the &lt;a href&#x3D;&#39;api-reference.html#Category&#39;&gt;categories&lt;/a&gt; in which the product is classified | [optional] 
**completenesses** | [**List[Products1AllOfEmbeddedItemsInnerAllOfCompletenessesInner]**](Products1AllOfEmbeddedItemsInnerAllOfCompletenessesInner.md) | Product completenesses for each channel/locale combination (only available since the 7.0 version, and when the \&quot;with_completenesses\&quot; query parameter is set to \&quot;true\&quot;) | [optional] 
**created** | **str** | Date of creation | [optional] 
**enabled** | **bool** | Whether the product is enabled | [optional] [default to True]
**family** | **str** | &lt;a href&#x3D;&#39;api-reference.html#Family&#39;&gt;Family&lt;/a&gt; code from which the product inherits its attributes and attributes requirements. | [optional] [default to 'null only in the case of a non variant product']
**groups** | **List[str]** | Codes of the groups to which the product belong | [optional] 
**metadata** | [**Products1AllOfEmbeddedItemsInnerAllOfMetadata**](Products1AllOfEmbeddedItemsInnerAllOfMetadata.md) |  | [optional] 
**parent** | **str** | Code of the parent &lt;a href&#x3D;&#39;api-reference.html#Productmodel&#39;&gt;product model&lt;/a&gt; when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3. | [optional] [default to 'null']
**quality_scores** | **object** | Product quality scores for each channel/locale combination (only available since the 5.0 and when the \&quot;with_quality_scores\&quot; query parameter is set to \&quot;true\&quot;) | [optional] 
**quantified_associations** | [**Products2AllOfEmbeddedItemsInnerAllOfQuantifiedAssociations**](Products2AllOfEmbeddedItemsInnerAllOfQuantifiedAssociations.md) |  | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**uuid** | **str** | Product uuid | [optional] 
**values** | [**Products1AllOfEmbeddedItemsInnerAllOfValues**](Products1AllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.products2_all_of_embedded_items_inner import Products2AllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of Products2AllOfEmbeddedItemsInner from a JSON string
products2_all_of_embedded_items_inner_instance = Products2AllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(Products2AllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
products2_all_of_embedded_items_inner_dict = products2_all_of_embedded_items_inner_instance.to_dict()
# create an instance of Products2AllOfEmbeddedItemsInner from a dict
products2_all_of_embedded_items_inner_from_dict = Products2AllOfEmbeddedItemsInner.from_dict(products2_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


