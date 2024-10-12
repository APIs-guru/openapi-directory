# GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet

The current facet key (i.e. attribute config) maps into the merged_facet_key. A facet key can have at most one child. The current facet key and the merged facet key need both to be textual custom attributes or both numerical custom attributes (same type).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merged_facet_key** | **str** | The merged facet key should be a valid facet key that is different than the facet key of the current catalog attribute. We refer this is merged facet key as the child of the current catalog attribute. This merged facet key can&#39;t be a parent of another facet key (i.e. no directed path of length 2). This merged facet key needs to be either a textual custom attribute or a numerical custom attribute. | [optional] 
**merged_facet_values** | [**List[GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValue]**](GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValue.md) | Each instance is a list of facet values that map into the same (possibly different) merged facet value. For the current attribute config, each facet value should map to at most one merged facet value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet import GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet from a JSON string
google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet_instance = GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet_dict = google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet from a dict
google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet_from_dict = GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacet.from_dict(google_cloud_retail_v2beta_catalog_attribute_facet_config_merged_facet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


