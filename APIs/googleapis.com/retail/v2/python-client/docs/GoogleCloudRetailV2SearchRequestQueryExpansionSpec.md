# GoogleCloudRetailV2SearchRequestQueryExpansionSpec

Specification to determine under which conditions query expansion should occur.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The condition under which query expansion should occur. Default to Condition.DISABLED. | [optional] 
**pin_unexpanded_results** | **bool** | Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_search_request_query_expansion_spec import GoogleCloudRetailV2SearchRequestQueryExpansionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2SearchRequestQueryExpansionSpec from a JSON string
google_cloud_retail_v2_search_request_query_expansion_spec_instance = GoogleCloudRetailV2SearchRequestQueryExpansionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2SearchRequestQueryExpansionSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2_search_request_query_expansion_spec_dict = google_cloud_retail_v2_search_request_query_expansion_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2SearchRequestQueryExpansionSpec from a dict
google_cloud_retail_v2_search_request_query_expansion_spec_from_dict = GoogleCloudRetailV2SearchRequestQueryExpansionSpec.from_dict(google_cloud_retail_v2_search_request_query_expansion_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


