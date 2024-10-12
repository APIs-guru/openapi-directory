# GoogleCloudRetailV2betaCompleteQueryResponse

Response of the autocomplete query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_token** | **str** | A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance. | [optional] 
**completion_results** | [**List[GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult]**](GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult.md) | Results of the matching suggestions. The result list is ordered and the first result is top suggestion. | [optional] 
**recent_search_results** | [**List[GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult]**](GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult.md) | Deprecated. Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. If you want to enable it, contact Retail Search support. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower case. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_complete_query_response import GoogleCloudRetailV2betaCompleteQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaCompleteQueryResponse from a JSON string
google_cloud_retail_v2beta_complete_query_response_instance = GoogleCloudRetailV2betaCompleteQueryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaCompleteQueryResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_complete_query_response_dict = google_cloud_retail_v2beta_complete_query_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaCompleteQueryResponse from a dict
google_cloud_retail_v2beta_complete_query_response_from_dict = GoogleCloudRetailV2betaCompleteQueryResponse.from_dict(google_cloud_retail_v2beta_complete_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


