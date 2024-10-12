# openapi_client.PrivateLinkServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_services_check_private_link_service_visibility**](PrivateLinkServicesApi.md#private_link_services_check_private_link_service_visibility) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/checkPrivateLinkServiceVisibility | 
[**private_link_services_check_private_link_service_visibility_by_resource_group**](PrivateLinkServicesApi.md#private_link_services_check_private_link_service_visibility_by_resource_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/checkPrivateLinkServiceVisibility | 
[**private_link_services_delete**](PrivateLinkServicesApi.md#private_link_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName} | 
[**private_link_services_delete_private_endpoint_connection**](PrivateLinkServicesApi.md#private_link_services_delete_private_endpoint_connection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections/{peConnectionName} | 
[**private_link_services_get**](PrivateLinkServicesApi.md#private_link_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName} | 
[**private_link_services_list**](PrivateLinkServicesApi.md#private_link_services_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices | 
[**private_link_services_list_auto_approved_private_link_services**](PrivateLinkServicesApi.md#private_link_services_list_auto_approved_private_link_services) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/autoApprovedPrivateLinkServices | 
[**private_link_services_list_auto_approved_private_link_services_by_resource_group**](PrivateLinkServicesApi.md#private_link_services_list_auto_approved_private_link_services_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/autoApprovedPrivateLinkServices | 
[**private_link_services_list_by_subscription**](PrivateLinkServicesApi.md#private_link_services_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/privateLinkServices | 
[**private_link_services_update_private_endpoint_connection**](PrivateLinkServicesApi.md#private_link_services_update_private_endpoint_connection) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections/{peConnectionName} | 


# **private_link_services_check_private_link_service_visibility**
> PrivateLinkServiceVisibility private_link_services_check_private_link_service_visibility(location, api_version, subscription_id, parameters)



Checks whether the subscription is visible to private link service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_private_link_service_visibility_request import CheckPrivateLinkServiceVisibilityRequest
from openapi_client.models.private_link_service_visibility import PrivateLinkServiceVisibility
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    location = 'location_example' # str | The location of the domain name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckPrivateLinkServiceVisibilityRequest() # CheckPrivateLinkServiceVisibilityRequest | The request body of CheckPrivateLinkService API call.

    try:
        api_response = api_instance.private_link_services_check_private_link_service_visibility(location, api_version, subscription_id, parameters)
        print("The response of PrivateLinkServicesApi->private_link_services_check_private_link_service_visibility:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_check_private_link_service_visibility: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckPrivateLinkServiceVisibilityRequest**](CheckPrivateLinkServiceVisibilityRequest.md)| The request body of CheckPrivateLinkService API call. | 

### Return type

[**PrivateLinkServiceVisibility**](PrivateLinkServiceVisibility.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns whether the subscription is visible to private link service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_check_private_link_service_visibility_by_resource_group**
> PrivateLinkServiceVisibility private_link_services_check_private_link_service_visibility_by_resource_group(location, resource_group_name, api_version, subscription_id, parameters)



Checks whether the subscription is visible to private link service in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_private_link_service_visibility_request import CheckPrivateLinkServiceVisibilityRequest
from openapi_client.models.private_link_service_visibility import PrivateLinkServiceVisibility
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    location = 'location_example' # str | The location of the domain name.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CheckPrivateLinkServiceVisibilityRequest() # CheckPrivateLinkServiceVisibilityRequest | The request body of CheckPrivateLinkService API call.

    try:
        api_response = api_instance.private_link_services_check_private_link_service_visibility_by_resource_group(location, resource_group_name, api_version, subscription_id, parameters)
        print("The response of PrivateLinkServicesApi->private_link_services_check_private_link_service_visibility_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_check_private_link_service_visibility_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CheckPrivateLinkServiceVisibilityRequest**](CheckPrivateLinkServiceVisibilityRequest.md)| The request body of CheckPrivateLinkService API call. | 

### Return type

[**PrivateLinkServiceVisibility**](PrivateLinkServiceVisibility.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns whether the subscription is visible to private link service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_delete**
> private_link_services_delete(resource_group_name, service_name, api_version, subscription_id)



Deletes the specified private link service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the private link service.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.private_link_services_delete(resource_group_name, service_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the private link service. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_delete_private_endpoint_connection**
> private_link_services_delete_private_endpoint_connection(resource_group_name, service_name, pe_connection_name, api_version, subscription_id)



Delete private end point connection for a private link service in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the private link service.
    pe_connection_name = 'pe_connection_name_example' # str | The name of the private end point connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.private_link_services_delete_private_endpoint_connection(resource_group_name, service_name, pe_connection_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_delete_private_endpoint_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the private link service. | 
 **pe_connection_name** | **str**| The name of the private end point connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_get**
> PrivateLinkService private_link_services_get(resource_group_name, service_name, api_version, subscription_id, expand=expand)



Gets the specified private link service by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_link_service import PrivateLinkService
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the private link service.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.private_link_services_get(resource_group_name, service_name, api_version, subscription_id, expand=expand)
        print("The response of PrivateLinkServicesApi->private_link_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the private link service. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**PrivateLinkService**](PrivateLinkService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting PrivateLinkService resource. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_list**
> PrivateLinkServiceListResult private_link_services_list(resource_group_name, api_version, subscription_id)



Gets all private link services in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_link_service_list_result import PrivateLinkServiceListResult
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.private_link_services_list(resource_group_name, api_version, subscription_id)
        print("The response of PrivateLinkServicesApi->private_link_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PrivateLinkServiceListResult**](PrivateLinkServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of privateLinkService resources. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_list_auto_approved_private_link_services**
> AutoApprovedPrivateLinkServicesResult private_link_services_list_auto_approved_private_link_services(location, api_version, subscription_id)



Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_approved_private_link_services_result import AutoApprovedPrivateLinkServicesResult
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    location = 'location_example' # str | The location of the domain name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.private_link_services_list_auto_approved_private_link_services(location, api_version, subscription_id)
        print("The response of PrivateLinkServicesApi->private_link_services_list_auto_approved_private_link_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_list_auto_approved_private_link_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AutoApprovedPrivateLinkServicesResult**](AutoApprovedPrivateLinkServicesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_list_auto_approved_private_link_services_by_resource_group**
> AutoApprovedPrivateLinkServicesResult private_link_services_list_auto_approved_private_link_services_by_resource_group(location, resource_group_name, api_version, subscription_id)



Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_approved_private_link_services_result import AutoApprovedPrivateLinkServicesResult
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    location = 'location_example' # str | The location of the domain name.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.private_link_services_list_auto_approved_private_link_services_by_resource_group(location, resource_group_name, api_version, subscription_id)
        print("The response of PrivateLinkServicesApi->private_link_services_list_auto_approved_private_link_services_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_list_auto_approved_private_link_services_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AutoApprovedPrivateLinkServicesResult**](AutoApprovedPrivateLinkServicesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_list_by_subscription**
> PrivateLinkServiceListResult private_link_services_list_by_subscription(api_version, subscription_id)



Gets all private link service in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_link_service_list_result import PrivateLinkServiceListResult
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.private_link_services_list_by_subscription(api_version, subscription_id)
        print("The response of PrivateLinkServicesApi->private_link_services_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PrivateLinkServiceListResult**](PrivateLinkServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PrivateLinkService resources. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_services_update_private_endpoint_connection**
> PrivateEndpointConnection private_link_services_update_private_endpoint_connection(resource_group_name, service_name, pe_connection_name, api_version, subscription_id, parameters)



Approve or reject private end point connection for a private link service in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_endpoint_connection import PrivateEndpointConnection
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
    api_instance = openapi_client.PrivateLinkServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the private link service.
    pe_connection_name = 'pe_connection_name_example' # str | The name of the private end point connection.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | Parameters supplied to approve or reject the private end point connection.

    try:
        api_response = api_instance.private_link_services_update_private_endpoint_connection(resource_group_name, service_name, pe_connection_name, api_version, subscription_id, parameters)
        print("The response of PrivateLinkServicesApi->private_link_services_update_private_endpoint_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkServicesApi->private_link_services_update_private_endpoint_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the private link service. | 
 **pe_connection_name** | **str**| The name of the private end point connection. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PrivateEndpointConnection**](PrivateEndpointConnection.md)| Parameters supplied to approve or reject the private end point connection. | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting PrivateEndpointConnection resource. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

