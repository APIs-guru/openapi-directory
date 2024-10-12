# openapi_client.QuotasApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotas_create_or_update**](QuotasApi.md#quotas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Creates or Updates a Quota.
[**quotas_delete**](QuotasApi.md#quotas_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Deletes specified quota
[**quotas_get**](QuotasApi.md#quotas_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Returns the requested quota.
[**quotas_list**](QuotasApi.md#quotas_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas | Lists all quotas.


# **quotas_create_or_update**
> Quota quotas_create_or_update(subscription_id, location, quota_name, api_version, new_quota)

Creates or Updates a Quota.

Creates or Updates a Quota.

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
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    quota_name = 'quota_name_example' # str | Name of the quota.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')
    new_quota = openapi_client.Quota() # Quota | New quota to create.

    try:
        # Creates or Updates a Quota.
        api_response = api_instance.quotas_create_or_update(subscription_id, location, quota_name, api_version, new_quota)
        print("The response of QuotasApi->quotas_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **quota_name** | **str**| Name of the quota. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]
 **new_quota** | [**Quota**](Quota.md)| New quota to create. | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotas_delete**
> quotas_delete(subscription_id, location, quota_name, api_version)

Deletes specified quota

Delete an existing quota.

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
    api_instance = openapi_client.QuotasApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    quota_name = 'quota_name_example' # str | Name of the quota.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Deletes specified quota
        api_instance.quotas_delete(subscription_id, location, quota_name, api_version)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **quota_name** | **str**| Name of the quota. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotas_get**
> Quota quotas_get(subscription_id, location, quota_name, api_version)

Returns the requested quota.

Get an existing Quota.

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
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    quota_name = 'quota_name_example' # str | Name of the quota.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Returns the requested quota.
        api_response = api_instance.quotas_get(subscription_id, location, quota_name, api_version)
        print("The response of QuotasApi->quotas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **quota_name** | **str**| Name of the quota. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

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

Lists all quotas.

Get a list of existing quotas.

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
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    api_version = '2015-12-01-preview' # str | Client API Version. (default to '2015-12-01-preview')

    try:
        # Lists all quotas.
        api_response = api_instance.quotas_list(subscription_id, location, api_version)
        print("The response of QuotasApi->quotas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->quotas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-12-01-preview&#39;]

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

