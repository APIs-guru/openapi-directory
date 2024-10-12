# GoogleCloudDiscoveryengineV1alphaPageInfo

Detailed page information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_category** | **str** | The most specific category associated with a category page. To represent full path of category, use &#39;&gt;&#39; sign to separate different hierarchies. If &#39;&gt;&#39; is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: &#x60;\&quot;pageCategory\&quot; : \&quot;Sales &gt; 2017 Black Friday Deals\&quot;&#x60;. Required for &#x60;view-category-page&#x60; events. Other event types should not set this field. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**pageview_id** | **str** | A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The &#x60;pageview_id&#x60; property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. | [optional] 
**referrer_uri** | **str** | The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty. | [optional] 
**uri** | **str** | Complete URL (window.location.href) of the user&#39;s current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_page_info import GoogleCloudDiscoveryengineV1alphaPageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPageInfo from a JSON string
google_cloud_discoveryengine_v1alpha_page_info_instance = GoogleCloudDiscoveryengineV1alphaPageInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPageInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_page_info_dict = google_cloud_discoveryengine_v1alpha_page_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPageInfo from a dict
google_cloud_discoveryengine_v1alpha_page_info_from_dict = GoogleCloudDiscoveryengineV1alphaPageInfo.from_dict(google_cloud_discoveryengine_v1alpha_page_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


