# GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest

Request message for CompletionService.CompleteQuery method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store** | **str** | Required. The parent data store resource name for which the completion is performed, such as &#x60;projects/*/locations/global/collections/default_collection/dataStores/default_data_store&#x60;. | [optional] 
**include_tail_suggestions** | **bool** | Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned. | [optional] 
**query** | **str** | Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters. | [optional] 
**query_model** | **str** | Specifies the autocomplete data model. This overrides any model specified in the Configuration &gt; Autocomplete section of the Cloud console. Currently supported values: * &#x60;document&#x60; - Using suggestions generated from user-imported documents. * &#x60;search-history&#x60; - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * &#x60;user-event&#x60; - Using suggestions generated from user-imported search events. * &#x60;document-completable&#x60; - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * &#x60;document&#x60; is the default model for regular dataStores. * &#x60;search-history&#x60; is the default model for site search dataStores. | [optional] 
**user_pseudo_id** | **str** | A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as &#x60;unknown_visitor&#x60;. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_complete_query_request import GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest from a JSON string
google_cloud_discoveryengine_v1alpha_complete_query_request_instance = GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_complete_query_request_dict = google_cloud_discoveryengine_v1alpha_complete_query_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest from a dict
google_cloud_discoveryengine_v1alpha_complete_query_request_from_dict = GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest.from_dict(google_cloud_discoveryengine_v1alpha_complete_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


