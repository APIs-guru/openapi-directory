# ProductModelList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**associations** | [**ProductModelsAllOfEmbeddedItemsInnerAllOfAssociations**](ProductModelsAllOfEmbeddedItemsInnerAllOfAssociations.md) |  | [optional] 
**categories** | **List[str]** | Codes of the &lt;a href&#x3D;&#39;api-reference.html#Category&#39;&gt;categories&lt;/a&gt; in which the product model is categorized | [optional] 
**code** | **str** | Product model code | 
**created** | **str** | Date of creation | [optional] 
**family** | **str** | &lt;a href&#x3D;&#39;api-reference.html#Family&#39;&gt;Family&lt;/a&gt; code  from which the product inherits its attributes and attributes requirements (since the 3.2) | [optional] 
**family_variant** | **str** | Family variant code from which the product model inherits its attributes and variant attributes | 
**metadata** | [**ProductModelsAllOfEmbeddedItemsInnerAllOfMetadata**](ProductModelsAllOfEmbeddedItemsInnerAllOfMetadata.md) |  | [optional] 
**parent** | **str** | Code of the parent &lt;a href&#x3D;&#39;api-reference.html#Productmodel&#39;&gt;product model&lt;/a&gt;. This parent can be modified since the 2.3. | [optional] [default to 'null']
**quality_scores** | **object** | Product model quality scores for each channel/locale combination (&lt;strong&gt;only available since the 7.0 version&lt;/strong&gt; and when the \&quot;with_quality_scores\&quot; query parameter is set to \&quot;true\&quot;) | [optional] 
**quantified_associations** | [**ProductModelsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations**](ProductModelsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations.md) |  | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**ProductModelListAllOfValues**](ProductModelListAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_model_list import ProductModelList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductModelList from a JSON string
product_model_list_instance = ProductModelList.from_json(json)
# print the JSON string representation of the object
print(ProductModelList.to_json())

# convert the object into a dict
product_model_list_dict = product_model_list_instance.to_dict()
# create an instance of ProductModelList from a dict
product_model_list_from_dict = ProductModelList.from_dict(product_model_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


