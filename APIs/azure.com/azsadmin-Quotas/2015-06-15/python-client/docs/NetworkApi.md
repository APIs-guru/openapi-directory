# openapi_client.NetworkApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotas_create_or_update**](NetworkApi.md#quotas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/locations/{location}/quotas/{resourceName} | 
[**quotas_delete**](NetworkApi.md#quotas_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/locations/{location}/quotas/{resourceName} | 


# **quotas_create_or_update**
> Quota quotas_create_or_update(subscription_id, location, resource_name, api_version, quota)



Create or update a quota.

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
    api_instance = openapi_client.NetworkApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')
    quota = openapi_client.Quota() # Quota | New network quota to create.

    try:
        api_response = api_instance.quotas_create_or_update(subscription_id, location, resource_name, api_version, quota)
        print("The response of NetworkApi->quotas_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->quotas_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]
 **quota** | [**Quota**](Quota.md)| New network quota to create. | 

### Return type

[**Quota**](Quota.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotas_delete**
> quotas_delete(subscription_id, location, resource_name, api_version)



Delete a quota by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.NetworkApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')

    try:
        api_instance.quotas_delete(subscription_id, location, resource_name, api_version)
    except Exception as e:
        print("Exception when calling NetworkApi->quotas_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

