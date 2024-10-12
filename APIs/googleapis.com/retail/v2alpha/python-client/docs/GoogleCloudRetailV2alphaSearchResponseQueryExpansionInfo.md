# GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo

Information describing query expansion including whether expansion has occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expanded_query** | **bool** | Bool describing whether query expansion has occurred. | [optional] 
**pinned_result_count** | **str** | Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_response_query_expansion_info import GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo from a JSON string
google_cloud_retail_v2alpha_search_response_query_expansion_info_instance = GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_response_query_expansion_info_dict = google_cloud_retail_v2alpha_search_response_query_expansion_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo from a dict
google_cloud_retail_v2alpha_search_response_query_expansion_info_from_dict = GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo.from_dict(google_cloud_retail_v2alpha_search_response_query_expansion_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


