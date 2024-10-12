# GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue

Replaces a set of textual facet values by the same (possibly different) merged facet value. Each facet value should appear at most once as a value per CatalogAttribute. This feature is available only for textual custom attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merged_value** | **str** | All the previous values are replaced by this merged facet value. This merged_value must be non-empty and can have up to 128 characters. | [optional] 
**values** | **List[str]** | All the facet values that are replaces by the same merged_value that follows. The maximum number of values per MergedFacetValue is 25. Each value can have up to 128 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value import GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue from a JSON string
google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value_instance = GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue.to_json())

# convert the object into a dict
google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value_dict = google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value_instance.to_dict()
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue from a dict
google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value_from_dict = GoogleCloudRetailV2CatalogAttributeFacetConfigMergedFacetValue.from_dict(google_cloud_retail_v2_catalog_attribute_facet_config_merged_facet_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


