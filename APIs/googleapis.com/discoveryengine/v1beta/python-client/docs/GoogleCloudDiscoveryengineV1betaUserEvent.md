# GoogleCloudDiscoveryengineV1betaUserEvent

UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Dict[str, GoogleCloudDiscoveryengineV1betaCustomAttribute]**](GoogleCloudDiscoveryengineV1betaCustomAttribute.md) | Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an &#x60;INVALID_ARGUMENT&#x60; error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is &#x60;traffic_channel&#x60;, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways. | [optional] 
**attribution_token** | **str** | Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of RecommendationService.Recommend. This field enables accurate attribution of recommendation model performance. The value must be one of: * RecommendResponse.attribution_token for events that are the result of RecommendationService.Recommend. * SearchResponse.attribution_token for events that are the result of SearchService.Search. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass RecommendResponse.attribution_token as a URL parameter to product K&#39;s page. When recording events on product K&#39;s page, log the RecommendResponse.attribution_token to this field. | [optional] 
**completion_info** | [**GoogleCloudDiscoveryengineV1betaCompletionInfo**](GoogleCloudDiscoveryengineV1betaCompletionInfo.md) |  | [optional] 
**direct_user_request** | **bool** | Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. | [optional] 
**documents** | [**List[GoogleCloudDiscoveryengineV1betaDocumentInfo]**](GoogleCloudDiscoveryengineV1betaDocumentInfo.md) | List of Documents associated with this user event. This field is optional except for the following event types: * &#x60;view-item&#x60; * &#x60;add-to-cart&#x60; * &#x60;purchase&#x60; * &#x60;media-play&#x60; * &#x60;media-complete&#x60; In a &#x60;search&#x60; event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new &#x60;search&#x60; event with different UserEvent.documents is desired. | [optional] 
**event_time** | **str** | Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened. | [optional] 
**event_type** | **str** | Required. User event type. Allowed values are: Generic values: * &#x60;search&#x60;: Search for Documents. * &#x60;view-item&#x60;: Detailed page view of a Document. * &#x60;view-item-list&#x60;: View of a panel or ordered list of Documents. * &#x60;view-home-page&#x60;: View of the home page. * &#x60;view-category-page&#x60;: View of a category page, e.g. Home &gt; Men &gt; Jeans Retail-related values: * &#x60;add-to-cart&#x60;: Add an item(s) to cart, e.g. in Retail online shopping * &#x60;purchase&#x60;: Purchase an item(s) Media-related values: * &#x60;media-play&#x60;: Start/resume watching a video, playing a song, etc. * &#x60;media-complete&#x60;: Finished or stopped midway through a video, song, etc. | [optional] 
**filter** | **str** | The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for &#x60;search&#x60; events, the associated SearchRequest may contain a filter expression in SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for &#x60;view-item-list&#x60; events that are generated from a RecommendRequest, this field may be populated directly from RecommendRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**media_info** | [**GoogleCloudDiscoveryengineV1betaMediaInfo**](GoogleCloudDiscoveryengineV1betaMediaInfo.md) |  | [optional] 
**page_info** | [**GoogleCloudDiscoveryengineV1betaPageInfo**](GoogleCloudDiscoveryengineV1betaPageInfo.md) |  | [optional] 
**panel** | [**GoogleCloudDiscoveryengineV1betaPanelInfo**](GoogleCloudDiscoveryengineV1betaPanelInfo.md) |  | [optional] 
**promotion_ids** | **List[str]** | The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID. | [optional] 
**search_info** | [**GoogleCloudDiscoveryengineV1betaSearchInfo**](GoogleCloudDiscoveryengineV1betaSearchInfo.md) |  | [optional] 
**session_id** | **str** | A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix. | [optional] 
**tag_ids** | **List[str]** | A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end. | [optional] 
**transaction_info** | [**GoogleCloudDiscoveryengineV1betaTransactionInfo**](GoogleCloudDiscoveryengineV1betaTransactionInfo.md) |  | [optional] 
**user_info** | [**GoogleCloudDiscoveryengineV1betaUserInfo**](GoogleCloudDiscoveryengineV1betaUserInfo.md) |  | [optional] 
**user_pseudo_id** | **str** | Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_user_event import GoogleCloudDiscoveryengineV1betaUserEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaUserEvent from a JSON string
google_cloud_discoveryengine_v1beta_user_event_instance = GoogleCloudDiscoveryengineV1betaUserEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaUserEvent.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_user_event_dict = google_cloud_discoveryengine_v1beta_user_event_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaUserEvent from a dict
google_cloud_discoveryengine_v1beta_user_event_from_dict = GoogleCloudDiscoveryengineV1betaUserEvent.from_dict(google_cloud_discoveryengine_v1beta_user_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


