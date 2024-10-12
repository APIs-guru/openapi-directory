# openapi_client.ContentFilteringRulesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_content_filtering**](ContentFilteringRulesApi.md#get_network_content_filtering) | **GET** /networks/{networkId}/contentFiltering | Return the content filtering settings for an MX network
[**update_network_content_filtering**](ContentFilteringRulesApi.md#update_network_content_filtering) | **PUT** /networks/{networkId}/contentFiltering | Update the content filtering settings for an MX network


# **get_network_content_filtering**
> object get_network_content_filtering(network_id)

Return the content filtering settings for an MX network

Return the content filtering settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentFilteringRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the content filtering settings for an MX network
        api_response = api_instance.get_network_content_filtering(network_id)
        print("The response of ContentFilteringRulesApi->get_network_content_filtering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentFilteringRulesApi->get_network_content_filtering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_content_filtering**
> object update_network_content_filtering(network_id, update_network_content_filtering_request=update_network_content_filtering_request)

Update the content filtering settings for an MX network

Update the content filtering settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_content_filtering_request import UpdateNetworkContentFilteringRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentFilteringRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_content_filtering_request = openapi_client.UpdateNetworkContentFilteringRequest() # UpdateNetworkContentFilteringRequest |  (optional)

    try:
        # Update the content filtering settings for an MX network
        api_response = api_instance.update_network_content_filtering(network_id, update_network_content_filtering_request=update_network_content_filtering_request)
        print("The response of ContentFilteringRulesApi->update_network_content_filtering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentFilteringRulesApi->update_network_content_filtering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_content_filtering_request** | [**UpdateNetworkContentFilteringRequest**](UpdateNetworkContentFilteringRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

