# GoogleCloudRecommendationengineV1beta1UserInfo

Information of end users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_user_request** | **bool** | Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). | [optional] 
**ip_address** | **str** | Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if &#x60;direct_user_request&#x60; is set. Used to extract location information for personalization. | [optional] 
**user_agent** | **str** | Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if &#x60;directUserRequest&#x60; is set. | [optional] 
**user_id** | **str** | Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don&#39;t set for anonymous users. Don&#39;t set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. | [optional] 
**visitor_id** | **str** | Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don&#39;t set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_user_info import GoogleCloudRecommendationengineV1beta1UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1UserInfo from a JSON string
google_cloud_recommendationengine_v1beta1_user_info_instance = GoogleCloudRecommendationengineV1beta1UserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1UserInfo.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_user_info_dict = google_cloud_recommendationengine_v1beta1_user_info_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1UserInfo from a dict
google_cloud_recommendationengine_v1beta1_user_info_from_dict = GoogleCloudRecommendationengineV1beta1UserInfo.from_dict(google_cloud_recommendationengine_v1beta1_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


