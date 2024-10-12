# GoogleCloudRetailV2alphaCatalogAttributeFacetConfig

Possible options for the facet that corresponds to the current attribute config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facet_intervals** | [**List[GoogleCloudRetailV2alphaInterval]**](GoogleCloudRetailV2alphaInterval.md) | If you don&#39;t set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound. | [optional] 
**ignored_facet_values** | [**List[GoogleCloudRetailV2alphaCatalogAttributeFacetConfigIgnoredFacetValues]**](GoogleCloudRetailV2alphaCatalogAttributeFacetConfigIgnoredFacetValues.md) | Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25. | [optional] 
**merged_facet** | [**GoogleCloudRetailV2alphaCatalogAttributeFacetConfigMergedFacet**](GoogleCloudRetailV2alphaCatalogAttributeFacetConfigMergedFacet.md) |  | [optional] 
**merged_facet_values** | [**List[GoogleCloudRetailV2alphaCatalogAttributeFacetConfigMergedFacetValue]**](GoogleCloudRetailV2alphaCatalogAttributeFacetConfigMergedFacetValue.md) | Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if \&quot;dark_blue\&quot; merged into \&quot;BLUE\&quot;, then the latter can&#39;t merge into \&quot;blues\&quot; because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes. | [optional] 
**rerank_config** | [**GoogleCloudRetailV2alphaCatalogAttributeFacetConfigRerankConfig**](GoogleCloudRetailV2alphaCatalogAttributeFacetConfigRerankConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_catalog_attribute_facet_config import GoogleCloudRetailV2alphaCatalogAttributeFacetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaCatalogAttributeFacetConfig from a JSON string
google_cloud_retail_v2alpha_catalog_attribute_facet_config_instance = GoogleCloudRetailV2alphaCatalogAttributeFacetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaCatalogAttributeFacetConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_catalog_attribute_facet_config_dict = google_cloud_retail_v2alpha_catalog_attribute_facet_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaCatalogAttributeFacetConfig from a dict
google_cloud_retail_v2alpha_catalog_attribute_facet_config_from_dict = GoogleCloudRetailV2alphaCatalogAttributeFacetConfig.from_dict(google_cloud_retail_v2alpha_catalog_attribute_facet_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


