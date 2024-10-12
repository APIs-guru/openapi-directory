# openapi_client.BgpServiceCommunitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bgp_service_communities_list**](BgpServiceCommunitiesApi.md#bgp_service_communities_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/bgpServiceCommunities | 


# **bgp_service_communities_list**
> BgpServiceCommunityListResult bgp_service_communities_list(api_version, subscription_id)



Gets all the available bgp service communities.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.bgp_service_community_list_result import BgpServiceCommunityListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BgpServiceCommunitiesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.bgp_service_communities_list(api_version, subscription_id)
        print("The response of BgpServiceCommunitiesApi->bgp_service_communities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BgpServiceCommunitiesApi->bgp_service_communities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BgpServiceCommunityListResult**](BgpServiceCommunityListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of BgpServiceCommunity resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

