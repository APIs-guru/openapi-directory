# openapi_client.KeyVaultApi

All URIs are relative to *https://management.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotas_list**](KeyVaultApi.md#quotas_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault.Admin/locations/{location}/quotas | 


# **quotas_list**
> QuotaList quotas_list(subscription_id, location, api_version)



Get a list of all quota objects for KeyVault at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quota_list import QuotaList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeyVaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The location of the quota.
    api_version = '2017-02-01-preview' # str | Client Api Version. (default to '2017-02-01-preview')

    try:
        api_response = api_instance.quotas_list(subscription_id, location, api_version)
        print("The response of KeyVaultApi->quotas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyVaultApi->quotas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The location of the quota. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2017-02-01-preview&#39;]

### Return type

[**QuotaList**](QuotaList.md)

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

