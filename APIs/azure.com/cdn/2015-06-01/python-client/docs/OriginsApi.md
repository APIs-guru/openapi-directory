# openapi_client.OriginsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**origins_create**](OriginsApi.md#origins_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | Creates a new CDN origin within an endpoint.
[**origins_delete_if_exists**](OriginsApi.md#origins_delete_if_exists) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | Deletes an existing CDN origin within an endpoint.
[**origins_get**](OriginsApi.md#origins_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | Gets an existing CDN origin within an endpoint.
[**origins_list_by_endpoint**](OriginsApi.md#origins_list_by_endpoint) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins | Lists the existing CDN origins within an endpoint.
[**origins_update**](OriginsApi.md#origins_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName} | Updates an existing CDN origin within an endpoint.


# **origins_create**
> Origin origins_create(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, origin_properties)

Creates a new CDN origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
from openapi_client.models.origin_parameters import OriginParameters
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
    api_instance = openapi_client.OriginsApi(api_client)
    origin_name = 'origin_name_example' # str | Name of the origin, an arbitrary value but it needs to be unique under endpoint
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    origin_properties = openapi_client.OriginParameters() # OriginParameters | Origin properties

    try:
        # Creates a new CDN origin within an endpoint.
        api_response = api_instance.origins_create(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, origin_properties)
        print("The response of OriginsApi->origins_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin_name** | **str**| Name of the origin, an arbitrary value but it needs to be unique under endpoint | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **origin_properties** | [**OriginParameters**](OriginParameters.md)| Origin properties | 

### Return type

[**Origin**](Origin.md)

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_delete_if_exists**
> Origin origins_delete_if_exists(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Deletes an existing CDN origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
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
    api_instance = openapi_client.OriginsApi(api_client)
    origin_name = 'origin_name_example' # str | Name of the origin. Must be unique within endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Deletes an existing CDN origin within an endpoint.
        api_response = api_instance.origins_delete_if_exists(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of OriginsApi->origins_delete_if_exists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_delete_if_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin_name** | **str**| Name of the origin. Must be unique within endpoint. | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**Origin**](Origin.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | No Content |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_get**
> Origin origins_get(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Gets an existing CDN origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
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
    api_instance = openapi_client.OriginsApi(api_client)
    origin_name = 'origin_name_example' # str | Name of the origin, an arbitrary value but it needs to be unique under endpoint
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Gets an existing CDN origin within an endpoint.
        api_response = api_instance.origins_get(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of OriginsApi->origins_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin_name** | **str**| Name of the origin, an arbitrary value but it needs to be unique under endpoint | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**Origin**](Origin.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_list_by_endpoint**
> OriginListResult origins_list_by_endpoint(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)

Lists the existing CDN origins within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin_list_result import OriginListResult
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
    api_instance = openapi_client.OriginsApi(api_client)
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        # Lists the existing CDN origins within an endpoint.
        api_response = api_instance.origins_list_by_endpoint(endpoint_name, profile_name, resource_group_name, subscription_id, api_version)
        print("The response of OriginsApi->origins_list_by_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_list_by_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**OriginListResult**](OriginListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **origins_update**
> Origin origins_update(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, origin_properties)

Updates an existing CDN origin within an endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.origin import Origin
from openapi_client.models.origin_parameters import OriginParameters
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
    api_instance = openapi_client.OriginsApi(api_client)
    origin_name = 'origin_name_example' # str | Name of the origin. Must be unique within endpoint.
    endpoint_name = 'endpoint_name_example' # str | Name of the endpoint within the CDN profile.
    profile_name = 'profile_name_example' # str | Name of the CDN profile within the resource group.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    origin_properties = openapi_client.OriginParameters() # OriginParameters | Origin properties

    try:
        # Updates an existing CDN origin within an endpoint.
        api_response = api_instance.origins_update(origin_name, endpoint_name, profile_name, resource_group_name, subscription_id, api_version, origin_properties)
        print("The response of OriginsApi->origins_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OriginsApi->origins_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin_name** | **str**| Name of the origin. Must be unique within endpoint. | 
 **endpoint_name** | **str**| Name of the endpoint within the CDN profile. | 
 **profile_name** | **str**| Name of the CDN profile within the resource group. | 
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **origin_properties** | [**OriginParameters**](OriginParameters.md)| Origin properties | 

### Return type

[**Origin**](Origin.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

