# openapi_client.FrontDoorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoints_purge_content**](FrontDoorsApi.md#endpoints_purge_content) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/purge | 
[**front_doors_create_or_update**](FrontDoorsApi.md#front_doors_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName} | 
[**front_doors_delete**](FrontDoorsApi.md#front_doors_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName} | 
[**front_doors_get**](FrontDoorsApi.md#front_doors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName} | 
[**front_doors_list**](FrontDoorsApi.md#front_doors_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/frontDoors | 
[**front_doors_list_by_resource_group**](FrontDoorsApi.md#front_doors_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors | 
[**front_doors_validate_custom_domain**](FrontDoorsApi.md#front_doors_validate_custom_domain) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/validateCustomDomain | 
[**frontend_endpoints_disable_https**](FrontDoorsApi.md#frontend_endpoints_disable_https) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/disableHttps | 
[**frontend_endpoints_enable_https**](FrontDoorsApi.md#frontend_endpoints_enable_https) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/enableHttps | 
[**frontend_endpoints_get**](FrontDoorsApi.md#frontend_endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName} | 
[**frontend_endpoints_list_by_front_door**](FrontDoorsApi.md#frontend_endpoints_list_by_front_door) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints | 


# **endpoints_purge_content**
> endpoints_purge_content(subscription_id, resource_group_name, front_door_name, api_version, content_file_paths)



Removes a content from Front Door.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.purge_parameters import PurgeParameters
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.
    content_file_paths = openapi_client.PurgeParameters() # PurgeParameters | The path to the content to be purged. Path can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.

    try:
        api_instance.endpoints_purge_content(subscription_id, resource_group_name, front_door_name, api_version, content_file_paths)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->endpoints_purge_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 
 **content_file_paths** | [**PurgeParameters**](PurgeParameters.md)| The path to the content to be purged. Path can be a full URL, e.g. &#39;/pictures/city.png&#39; which removes a single file, or a directory with a wildcard, e.g. &#39;/pictures/*&#39; which removes all folders and files in the directory. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_create_or_update**
> FrontDoor front_doors_create_or_update(subscription_id, resource_group_name, front_door_name, api_version, front_door_parameters)



Creates a new Front Door with a Front Door name under the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.front_door import FrontDoor
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.
    front_door_parameters = openapi_client.FrontDoor() # FrontDoor | Front Door properties needed to create a new Front Door.

    try:
        api_response = api_instance.front_doors_create_or_update(subscription_id, resource_group_name, front_door_name, api_version, front_door_parameters)
        print("The response of FrontDoorsApi->front_doors_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 
 **front_door_parameters** | [**FrontDoor**](FrontDoor.md)| Front Door properties needed to create a new Front Door. | 

### Return type

[**FrontDoor**](FrontDoor.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. The request has been fulfilled and a new Front Door has been created. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_delete**
> front_doors_delete(subscription_id, resource_group_name, front_door_name, api_version)



Deletes an existing Front Door with the specified parameters.

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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.front_doors_delete(subscription_id, resource_group_name, front_door_name, api_version)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 

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
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**204** | No Content. The request has been accepted but the Front Door was not found. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_get**
> FrontDoor front_doors_get(subscription_id, resource_group_name, front_door_name, api_version)



Gets a Front Door with the specified Front Door name under the specified subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.front_door import FrontDoor
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.front_doors_get(subscription_id, resource_group_name, front_door_name, api_version)
        print("The response of FrontDoorsApi->front_doors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**FrontDoor**](FrontDoor.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_list**
> FrontDoorListResult front_doors_list(subscription_id, api_version)



Lists all of the Front Doors within an Azure subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.front_door_list_result import FrontDoorListResult
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.front_doors_list(subscription_id, api_version)
        print("The response of FrontDoorsApi->front_doors_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**FrontDoorListResult**](FrontDoorListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_list_by_resource_group**
> FrontDoorListResult front_doors_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all of the Front Doors within a resource group under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.front_door_list_result import FrontDoorListResult
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.front_doors_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of FrontDoorsApi->front_doors_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**FrontDoorListResult**](FrontDoorListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **front_doors_validate_custom_domain**
> ValidateCustomDomainOutput front_doors_validate_custom_domain(subscription_id, resource_group_name, front_door_name, api_version, custom_domain_properties)



Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validate_custom_domain_input import ValidateCustomDomainInput
from openapi_client.models.validate_custom_domain_output import ValidateCustomDomainOutput
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.
    custom_domain_properties = openapi_client.ValidateCustomDomainInput() # ValidateCustomDomainInput | Custom domain to be validated.

    try:
        api_response = api_instance.front_doors_validate_custom_domain(subscription_id, resource_group_name, front_door_name, api_version, custom_domain_properties)
        print("The response of FrontDoorsApi->front_doors_validate_custom_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->front_doors_validate_custom_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 
 **custom_domain_properties** | [**ValidateCustomDomainInput**](ValidateCustomDomainInput.md)| Custom domain to be validated. | 

### Return type

[**ValidateCustomDomainOutput**](ValidateCustomDomainOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **frontend_endpoints_disable_https**
> frontend_endpoints_disable_https(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version)



Disables a frontendEndpoint for HTTPS traffic

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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    frontend_endpoint_name = 'frontend_endpoint_name_example' # str | Name of the Frontend endpoint which is unique within the Front Door.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_instance.frontend_endpoints_disable_https(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->frontend_endpoints_disable_https: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **frontend_endpoint_name** | **str**| Name of the Frontend endpoint which is unique within the Front Door. | 
 **api_version** | **str**| Client API version. | 

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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **frontend_endpoints_enable_https**
> frontend_endpoints_enable_https(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version, custom_https_configuration)



Enables a frontendEndpoint for HTTPS traffic

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_https_configuration import CustomHttpsConfiguration
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    frontend_endpoint_name = 'frontend_endpoint_name_example' # str | Name of the Frontend endpoint which is unique within the Front Door.
    api_version = 'api_version_example' # str | Client API version.
    custom_https_configuration = openapi_client.CustomHttpsConfiguration() # CustomHttpsConfiguration | The configuration specifying how to enable HTTPS

    try:
        api_instance.frontend_endpoints_enable_https(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version, custom_https_configuration)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->frontend_endpoints_enable_https: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **frontend_endpoint_name** | **str**| Name of the Frontend endpoint which is unique within the Front Door. | 
 **api_version** | **str**| Client API version. | 
 **custom_https_configuration** | [**CustomHttpsConfiguration**](CustomHttpsConfiguration.md)| The configuration specifying how to enable HTTPS | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **frontend_endpoints_get**
> FrontendEndpoint frontend_endpoints_get(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version)



Gets a Frontend endpoint with the specified name within the specified Front Door.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.frontend_endpoint import FrontendEndpoint
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    frontend_endpoint_name = 'frontend_endpoint_name_example' # str | Name of the Frontend endpoint which is unique within the Front Door.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.frontend_endpoints_get(subscription_id, resource_group_name, front_door_name, frontend_endpoint_name, api_version)
        print("The response of FrontDoorsApi->frontend_endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->frontend_endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **frontend_endpoint_name** | **str**| Name of the Frontend endpoint which is unique within the Front Door. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**FrontendEndpoint**](FrontendEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **frontend_endpoints_list_by_front_door**
> FrontendEndpointsListResult frontend_endpoints_list_by_front_door(subscription_id, resource_group_name, front_door_name, api_version)



Lists all of the frontend endpoints within a Front Door.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.frontend_endpoints_list_result import FrontendEndpointsListResult
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
    api_instance = openapi_client.FrontDoorsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    front_door_name = 'front_door_name_example' # str | Name of the Front Door which is globally unique.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.frontend_endpoints_list_by_front_door(subscription_id, resource_group_name, front_door_name, api_version)
        print("The response of FrontDoorsApi->frontend_endpoints_list_by_front_door:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FrontDoorsApi->frontend_endpoints_list_by_front_door: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **front_door_name** | **str**| Name of the Front Door which is globally unique. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**FrontendEndpointsListResult**](FrontendEndpointsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Front Door error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

