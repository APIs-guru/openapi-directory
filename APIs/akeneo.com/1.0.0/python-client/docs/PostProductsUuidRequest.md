# PostProductsUuidRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
from openapi_client.models.post_products_uuid_request import PostProductsUuidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostProductsUuidRequest from a JSON string
post_products_uuid_request_instance = PostProductsUuidRequest.from_json(json)
# print the JSON string representation of the object
print(PostProductsUuidRequest.to_json())

# convert the object into a dict
post_products_uuid_request_dict = post_products_uuid_request_instance.to_dict()
# create an instance of PostProductsUuidRequest from a dict
post_products_uuid_request_from_dict = PostProductsUuidRequest.from_dict(post_products_uuid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


