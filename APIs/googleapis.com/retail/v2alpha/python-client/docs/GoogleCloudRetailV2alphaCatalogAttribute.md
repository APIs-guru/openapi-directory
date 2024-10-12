# GoogleCloudRetailV2alphaCatalogAttribute

Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_facetable_option** | **str** | If DYNAMIC_FACETABLE_ENABLED, attribute values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if CatalogAttribute.indexable_option is INDEXABLE_DISABLED. Otherwise, an INVALID_ARGUMENT error is returned. Must be specified, otherwise throws INVALID_FORMAT error. | [optional] 
**exact_searchable_option** | **str** | If EXACT_SEARCHABLE_ENABLED, attribute values will be exact searchable. This property only applies to textual custom attributes and requires indexable set to enabled to enable exact-searchable. If unset, the server behavior defaults to EXACT_SEARCHABLE_DISABLED. | [optional] 
**facet_config** | [**GoogleCloudRetailV2alphaCatalogAttributeFacetConfig**](GoogleCloudRetailV2alphaCatalogAttributeFacetConfig.md) |  | [optional] 
**in_use** | **bool** | Output only. Indicates whether this attribute has been used by any products. &#x60;True&#x60; if at least one Product is using this attribute in Product.attributes. Otherwise, this field is &#x60;False&#x60;. CatalogAttribute can be pre-loaded by using CatalogService.AddCatalogAttribute, CatalogService.ImportCatalogAttributes, or CatalogService.UpdateAttributesConfig APIs. This field is &#x60;False&#x60; for pre-loaded CatalogAttributes. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. After catalog changes, it takes about 10 minutes for this field to update. | [optional] [readonly] 
**indexable_option** | **str** | When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if INDEXABLE_ENABLED attribute values are indexed so that it can be filtered, faceted, or boosted in SearchService.Search. Must be specified when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. | [optional] 
**key** | **str** | Required. Attribute name. For example: &#x60;color&#x60;, &#x60;brands&#x60;, &#x60;attributes.custom_attribute&#x60;, such as &#x60;attributes.xyz&#x60;. To be indexable, the attribute name can contain only alpha-numeric characters and underscores. For example, an attribute named &#x60;attributes.abc_xyz&#x60; can be indexed, but an attribute named &#x60;attributes.abc-xyz&#x60; cannot be indexed. If the attribute key starts with &#x60;attributes.&#x60;, then the attribute is a custom attribute. Attributes such as &#x60;brands&#x60;, &#x60;patterns&#x60;, and &#x60;title&#x60; are built-in and called system attributes. | [optional] 
**recommendations_filtering_option** | **str** | When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if RECOMMENDATIONS_FILTERING_ENABLED, attribute values are filterable for recommendations. This option works for categorical features only, does not work for numerical features, inventory filtering. | [optional] 
**retrievable_option** | **str** | If RETRIEVABLE_ENABLED, attribute values are retrievable in the search results. If unset, the server behavior defaults to RETRIEVABLE_DISABLED. | [optional] 
**searchable_option** | **str** | When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if SEARCHABLE_ENABLED, attribute values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but attribute type is numerical, attribute values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical attributes. Must be specified, when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. | [optional] 
**type** | **str** | Output only. The type of this attribute. This is derived from the attribute in Product.attributes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_catalog_attribute import GoogleCloudRetailV2alphaCatalogAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaCatalogAttribute from a JSON string
google_cloud_retail_v2alpha_catalog_attribute_instance = GoogleCloudRetailV2alphaCatalogAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaCatalogAttribute.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_catalog_attribute_dict = google_cloud_retail_v2alpha_catalog_attribute_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaCatalogAttribute from a dict
google_cloud_retail_v2alpha_catalog_attribute_from_dict = GoogleCloudRetailV2alphaCatalogAttribute.from_dict(google_cloud_retail_v2alpha_catalog_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


