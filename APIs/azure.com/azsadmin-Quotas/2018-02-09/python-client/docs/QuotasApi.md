# openapi_client.QuotasApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotas_create_or_update**](QuotasApi.md#quotas_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Creates or Updates a Compute Quota.
[**quotas_delete**](QuotasApi.md#quotas_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Deletes specified Compute quota
[**quotas_get**](QuotasApi.md#quotas_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName} | Returns the requested Compute quota.
[**quotas_list**](QuotasApi.md#quotas_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas | Lists all Compute quotas.


# **quotas_create_or_update**
> QuotasGet200Response quotas_create_or_update(subscription_id, location, quota_name, api_version, new_quota)

Creates or Updates a Compute Quota.

Creates or Updates a Compute Quota with the provided quota parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quotas_get200_response import QuotasGet200Response
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
    api_version = 'api_version_example' # str | Client API Version.
    new_quota = openapi_client.QuotasGet200Response() # QuotasGet200Response | New quota to create.

    try:
        # Creates or Updates a Compute Quota.
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
 **api_version** | **str**| Client API Version. | 
 **new_quota** | [**QuotasGet200Response**](QuotasGet200Response.md)| New quota to create. | 

### Return type

[**QuotasGet200Response**](QuotasGet200Response.md)

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

Deletes specified Compute quota

Delete an existing Compute quota.

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
    api_version = 'api_version_example' # str | Client API Version.

    try:
        # Deletes specified Compute quota
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
 **api_version** | **str**| Client API Version. | 

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
> QuotasGet200Response quotas_get(subscription_id, location, quota_name, api_version)

Returns the requested Compute quota.

Get an existing Compute Quota.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quotas_get200_response import QuotasGet200Response
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
    api_version = 'api_version_example' # str | Client API Version.

    try:
        # Returns the requested Compute quota.
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
 **api_version** | **str**| Client API Version. | 

### Return type

[**QuotasGet200Response**](QuotasGet200Response.md)

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
> QuotasList200Response quotas_list(subscription_id, location, api_version)

Lists all Compute quotas.

Get a list of existing Compute quotas.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.quotas_list200_response import QuotasList200Response
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
    api_version = 'api_version_example' # str | Client API Version.

    try:
        # Lists all Compute quotas.
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
 **api_version** | **str**| Client API Version. | 

### Return type

[**QuotasList200Response**](QuotasList200Response.md)

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

