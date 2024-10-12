# GoogleCloudRetailV2alphaAttributesConfig

Catalog level attribute config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_config_level** | **str** | Output only. The AttributeConfigLevel used for this catalog. | [optional] [readonly] 
**catalog_attributes** | [**Dict[str, GoogleCloudRetailV2alphaCatalogAttribute]**](GoogleCloudRetailV2alphaCatalogAttribute.md) | Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute&#39;s name. For example: &#x60;color&#x60;, &#x60;brands&#x60;, &#x60;attributes.custom_attribute&#x60;, such as &#x60;attributes.xyz&#x60;. The maximum number of catalog attributes allowed in a request is 1000. | [optional] 
**name** | **str** | Required. Immutable. The fully qualified resource name of the attribute config. Format: &#x60;projects/*/locations/*/catalogs/*/attributesConfig&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_attributes_config import GoogleCloudRetailV2alphaAttributesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaAttributesConfig from a JSON string
google_cloud_retail_v2alpha_attributes_config_instance = GoogleCloudRetailV2alphaAttributesConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaAttributesConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_attributes_config_dict = google_cloud_retail_v2alpha_attributes_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaAttributesConfig from a dict
google_cloud_retail_v2alpha_attributes_config_from_dict = GoogleCloudRetailV2alphaAttributesConfig.from_dict(google_cloud_retail_v2alpha_attributes_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


