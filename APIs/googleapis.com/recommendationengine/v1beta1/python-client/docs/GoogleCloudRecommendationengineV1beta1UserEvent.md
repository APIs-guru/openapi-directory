# GoogleCloudRecommendationengineV1beta1UserEvent

UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_detail** | [**GoogleCloudRecommendationengineV1beta1EventDetail**](GoogleCloudRecommendationengineV1beta1EventDetail.md) |  | [optional] 
**event_source** | **str** | Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to &#x60;EVENT_SOURCE_UNSPECIFIED&#x60;. | [optional] 
**event_time** | **str** | Optional. Only required for ImportUserEvents method. Timestamp of user event created. | [optional] 
**event_type** | **str** | Required. User event type. Allowed values are: * &#x60;add-to-cart&#x60; Products being added to cart. * &#x60;add-to-list&#x60; Items being added to a list (shopping list, favorites etc). * &#x60;category-page-view&#x60; Special pages such as sale or promotion pages viewed. * &#x60;checkout-start&#x60; User starting a checkout process. * &#x60;detail-page-view&#x60; Products detail page viewed. * &#x60;home-page-view&#x60; Homepage viewed. * &#x60;page-visit&#x60; Generic page visits not included in the event types above. * &#x60;purchase-complete&#x60; User finishing a purchase. * &#x60;refund&#x60; Purchased items being refunded or returned. * &#x60;remove-from-cart&#x60; Products being removed from cart. * &#x60;remove-from-list&#x60; Items being removed from a list. * &#x60;search&#x60; Product search. * &#x60;shopping-cart-page-view&#x60; User viewing a shopping cart. * &#x60;impression&#x60; List of items displayed. Used by Google Tag Manager. | [optional] 
**product_event_detail** | [**GoogleCloudRecommendationengineV1beta1ProductEventDetail**](GoogleCloudRecommendationengineV1beta1ProductEventDetail.md) |  | [optional] 
**user_info** | [**GoogleCloudRecommendationengineV1beta1UserInfo**](GoogleCloudRecommendationengineV1beta1UserInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_user_event import GoogleCloudRecommendationengineV1beta1UserEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1UserEvent from a JSON string
google_cloud_recommendationengine_v1beta1_user_event_instance = GoogleCloudRecommendationengineV1beta1UserEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1UserEvent.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_user_event_dict = google_cloud_recommendationengine_v1beta1_user_event_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1UserEvent from a dict
google_cloud_recommendationengine_v1beta1_user_event_from_dict = GoogleCloudRecommendationengineV1beta1UserEvent.from_dict(google_cloud_recommendationengine_v1beta1_user_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


