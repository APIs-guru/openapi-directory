# GoogleCloudRetailV2betaCustomAttribute

A custom attribute that is not explicitly modeled in Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexable** | **bool** | This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated &#39;PRODUCT_LEVEL_ATTRIBUTE_CONFIG&#39; mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are indexed, so that they can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details. | [optional] 
**numbers** | **List[float]** | The numerical values of this custom attribute. For example, &#x60;[2.3, 15.4]&#x60; when the key is \&quot;lengths_cm\&quot;. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**searchable** | **bool** | This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated &#39;PRODUCT_LEVEL_ATTRIBUTE_CONFIG&#39; mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned. | [optional] 
**text** | **List[str]** | The textual values of this custom attribute. For example, &#x60;[\&quot;yellow\&quot;, \&quot;green\&quot;]&#x60; when the key is \&quot;color\&quot;. Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_custom_attribute import GoogleCloudRetailV2betaCustomAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaCustomAttribute from a JSON string
google_cloud_retail_v2beta_custom_attribute_instance = GoogleCloudRetailV2betaCustomAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaCustomAttribute.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_custom_attribute_dict = google_cloud_retail_v2beta_custom_attribute_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaCustomAttribute from a dict
google_cloud_retail_v2beta_custom_attribute_from_dict = GoogleCloudRetailV2betaCustomAttribute.from_dict(google_cloud_retail_v2beta_custom_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


