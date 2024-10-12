# GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig

Options to rerank based on facet values engaged by the user for the current key. That key needs to be a custom textual key and facetable. To use this control, you also need to pass all the facet keys engaged by the user in the request using the field [SearchRequest.FacetSpec]. In particular, if you don't pass the facet keys engaged that you want to rerank on, this control won't be effective. Moreover, to obtain better results, the facet values that you want to rerank on should be close to English (ideally made of words, underscores, and spaces).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facet_values** | **List[str]** | If empty, rerank on all facet values for the current key. Otherwise, will rerank on the facet values from this list only. | [optional] 
**rerank_facet** | **bool** | If set to true, then we also rerank the dynamic facets based on the facet values engaged by the user for the current attribute key during serving. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config import GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig from a JSON string
google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config_instance = GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config_dict = google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig from a dict
google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config_from_dict = GoogleCloudRetailV2CatalogAttributeFacetConfigRerankConfig.from_dict(google_cloud_retail_v2_catalog_attribute_facet_config_rerank_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


