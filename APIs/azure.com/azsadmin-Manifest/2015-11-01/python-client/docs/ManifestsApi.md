# openapi_client.ManifestsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manifests_get**](ManifestsApi.md#manifests_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests/{manifestName} | 
[**manifests_list**](ManifestsApi.md#manifests_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests | 


# **manifests_get**
> Manifest manifests_get(subscription_id, api_version, manifest_name)



Get the specified manifest.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.manifest import Manifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')
    manifest_name = 'manifest_name_example' # str | The manifest name.

    try:
        api_response = api_instance.manifests_get(subscription_id, api_version, manifest_name)
        print("The response of ManifestsApi->manifests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->manifests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]
 **manifest_name** | **str**| The manifest name. | 

### Return type

[**Manifest**](Manifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manifests_list**
> ManifestList manifests_list(subscription_id, api_version)



Get a list of all manifests.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.manifest_list import ManifestList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.manifests_list(subscription_id, api_version)
        print("The response of ManifestsApi->manifests_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->manifests_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**ManifestList**](ManifestList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

