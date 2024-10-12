# GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse

Message for response to listing ProxyConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**proxy_configs** | [**List[GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig]**](GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig.md) | The list of ProxyConfig objects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response_dict = google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


