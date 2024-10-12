# GoogleCloudRetailV2betaUserInfo

Information of an end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_user_request** | **bool** | True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. | [optional] 
**ip_address** | **str** | The end user&#39;s IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. \&quot;104.133.9.80\&quot;) or an IPv6 address (e.g. \&quot;2001:0db8:85a3:0000:0000:8a2e:0370:7334\&quot;). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when: * setting SearchRequest.user_info. * using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. | [optional] 
**user_agent** | **str** | User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. | [optional] 
**user_id** | **str** | Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don&#39;t set for anonymous users. Always use a hashed value for this ID. Don&#39;t set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_user_info import GoogleCloudRetailV2betaUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaUserInfo from a JSON string
google_cloud_retail_v2beta_user_info_instance = GoogleCloudRetailV2betaUserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaUserInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_user_info_dict = google_cloud_retail_v2beta_user_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaUserInfo from a dict
google_cloud_retail_v2beta_user_info_from_dict = GoogleCloudRetailV2betaUserInfo.from_dict(google_cloud_retail_v2beta_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


