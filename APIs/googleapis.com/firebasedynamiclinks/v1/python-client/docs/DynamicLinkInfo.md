# DynamicLinkInfo

Information about a Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_info** | [**AnalyticsInfo**](AnalyticsInfo.md) |  | [optional] 
**android_info** | [**AndroidInfo**](AndroidInfo.md) |  | [optional] 
**desktop_info** | [**DesktopInfo**](DesktopInfo.md) |  | [optional] 
**domain_uri_prefix** | **str** | E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing | [optional] 
**dynamic_link_domain** | **str** | Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix. | [optional] 
**ios_info** | [**IosInfo**](IosInfo.md) |  | [optional] 
**link** | **str** | The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See &#39;link&#39; parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required. | [optional] 
**navigation_info** | [**NavigationInfo**](NavigationInfo.md) |  | [optional] 
**social_meta_tag_info** | [**SocialMetaTagInfo**](SocialMetaTagInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.dynamic_link_info import DynamicLinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicLinkInfo from a JSON string
dynamic_link_info_instance = DynamicLinkInfo.from_json(json)
# print the JSON string representation of the object
print(DynamicLinkInfo.to_json())

# convert the object into a dict
dynamic_link_info_dict = dynamic_link_info_instance.to_dict()
# create an instance of DynamicLinkInfo from a dict
dynamic_link_info_from_dict = DynamicLinkInfo.from_dict(dynamic_link_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


