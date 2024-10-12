# openapi_client.QuotasApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotas_get**](QuotasApi.md#quotas_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/locations/{location}/quotas/{quota} | 
[**quotas_list**](QuotasApi.md#quotas_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/locations/{location}/quotas | 


# **quotas_get**
> Quota quotas_get(subscription_id, location, quota, api_version)



Gets a quota by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quota import Quota
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
    api_instance = openapi_client.QuotasApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The AzureStack location.
    quota = 'quota_example' # str | Name of the quota.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.quotas_get(subscription_id, location, quota, api_version)
        print("The response of QuotasApi->quotas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The AzureStack location. | 
 **quota** | **str**| Name of the quota. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**Quota**](Quota.md)

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

# **quotas_list**
> QuotaList quotas_list(subscription_id, location, api_version)



Get the list of quotas at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quota_list import QuotaList
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
    api_instance = openapi_client.QuotasApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The AzureStack location.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.quotas_list(subscription_id, location, api_version)
        print("The response of QuotasApi->quotas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The AzureStack location. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

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

