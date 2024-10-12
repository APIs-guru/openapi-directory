# GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues

Facet values to ignore on facets during the specified time range for the given SearchResponse.Facet.key attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | If start time is empty and end time is not empty, then ignore these facet values before end time. | [optional] 
**start_time** | **str** | Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time. | [optional] 
**values** | **List[str]** | List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values import GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues from a JSON string
google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values_instance = GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues.to_json())

# convert the object into a dict
google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values_dict = google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values_instance.to_dict()
# create an instance of GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues from a dict
google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values_from_dict = GoogleCloudRetailV2CatalogAttributeFacetConfigIgnoredFacetValues.from_dict(google_cloud_retail_v2_catalog_attribute_facet_config_ignored_facet_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


