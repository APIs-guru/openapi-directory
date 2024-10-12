# GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec

The specifications of dynamically generated facets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it&#39;s unset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_request_dynamic_facet_spec import GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec from a JSON string
google_cloud_retail_v2alpha_search_request_dynamic_facet_spec_instance = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_request_dynamic_facet_spec_dict = google_cloud_retail_v2alpha_search_request_dynamic_facet_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec from a dict
google_cloud_retail_v2alpha_search_request_dynamic_facet_spec_from_dict = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec.from_dict(google_cloud_retail_v2alpha_search_request_dynamic_facet_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


