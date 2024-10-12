# openapi_client.CustomAPIsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_apis_create_or_update**](CustomAPIsApi.md#custom_apis_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis/{apiName} | Replaces an existing custom API
[**custom_apis_delete**](CustomAPIsApi.md#custom_apis_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis/{apiName} | Delete a custom API
[**custom_apis_extract_api_definition_from_wsdl**](CustomAPIsApi.md#custom_apis_extract_api_definition_from_wsdl) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/extractApiDefinitionFromWsdl | Returns API definition from WSDL
[**custom_apis_get**](CustomAPIsApi.md#custom_apis_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis/{apiName} | Get a custom API
[**custom_apis_list**](CustomAPIsApi.md#custom_apis_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/customApis | List of custom APIs
[**custom_apis_list_by_resource_group**](CustomAPIsApi.md#custom_apis_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis | List of custom APIs
[**custom_apis_list_wsdl_interfaces**](CustomAPIsApi.md#custom_apis_list_wsdl_interfaces) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/listWsdlInterfaces | Lists WSDL interfaces
[**custom_apis_move**](CustomAPIsApi.md#custom_apis_move) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis/{apiName}/move | Moves the custom API
[**custom_apis_update**](CustomAPIsApi.md#custom_apis_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/customApis/{apiName} | Update an existing custom API


# **custom_apis_create_or_update**
> CustomApiDefinition custom_apis_create_or_update(subscription_id, resource_group_name, api_name, api_version, custom_api)

Replaces an existing custom API

Creates or updates an existing custom API

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_definition import CustomApiDefinition
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_name = 'api_name_example' # str | API name
    api_version = 'api_version_example' # str | API Version
    custom_api = openapi_client.CustomApiDefinition() # CustomApiDefinition | The custom API

    try:
        # Replaces an existing custom API
        api_response = api_instance.custom_apis_create_or_update(subscription_id, resource_group_name, api_name, api_version, custom_api)
        print("The response of CustomAPIsApi->custom_apis_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_name** | **str**| API name | 
 **api_version** | **str**| API Version | 
 **custom_api** | [**CustomApiDefinition**](CustomApiDefinition.md)| The custom API | 

### Return type

[**CustomApiDefinition**](CustomApiDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replacing custom API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_delete**
> custom_apis_delete(subscription_id, resource_group_name, api_name, api_version)

Delete a custom API

Deletes a custom API from the resource group

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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_name = 'api_name_example' # str | API name
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a custom API
        api_instance.custom_apis_delete(subscription_id, resource_group_name, api_name, api_version)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_name** | **str**| API name | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully deleted the custom API |  -  |
**204** | No custom API to delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_extract_api_definition_from_wsdl**
> object custom_apis_extract_api_definition_from_wsdl(subscription_id, location, api_version, wsdl_definition)

Returns API definition from WSDL

Parses the specified WSDL and extracts the API definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wsdl_definition import WsdlDefinition
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    location = 'location_example' # str | The location
    api_version = 'api_version_example' # str | API Version
    wsdl_definition = openapi_client.WsdlDefinition() # WsdlDefinition | WSDL definition

    try:
        # Returns API definition from WSDL
        api_response = api_instance.custom_apis_extract_api_definition_from_wsdl(subscription_id, location, api_version, wsdl_definition)
        print("The response of CustomAPIsApi->custom_apis_extract_api_definition_from_wsdl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_extract_api_definition_from_wsdl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **location** | **str**| The location | 
 **api_version** | **str**| API Version | 
 **wsdl_definition** | [**WsdlDefinition**](WsdlDefinition.md)| WSDL definition | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Swagger of the API extracted from the WSDL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_get**
> CustomApiDefinition custom_apis_get(subscription_id, resource_group_name, api_name, api_version)

Get a custom API

Gets a custom API by name for a specific subscription and resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_definition import CustomApiDefinition
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_name = 'api_name_example' # str | API name
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a custom API
        api_response = api_instance.custom_apis_get(subscription_id, resource_group_name, api_name, api_version)
        print("The response of CustomAPIsApi->custom_apis_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_name** | **str**| API name | 
 **api_version** | **str**| API Version | 

### Return type

[**CustomApiDefinition**](CustomApiDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A custom API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_list**
> CustomApiDefinitionCollection custom_apis_list(subscription_id, api_version, top=top, skiptoken=skiptoken)

List of custom APIs

Gets a list of all custom APIs for a subscription id

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_definition_collection import CustomApiDefinitionCollection
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    top = 56 # int | The number of items to be included in the result (optional)
    skiptoken = 'skiptoken_example' # str | Skip Token (optional)

    try:
        # List of custom APIs
        api_response = api_instance.custom_apis_list(subscription_id, api_version, top=top, skiptoken=skiptoken)
        print("The response of CustomAPIsApi->custom_apis_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **top** | **int**| The number of items to be included in the result | [optional] 
 **skiptoken** | **str**| Skip Token | [optional] 

### Return type

[**CustomApiDefinitionCollection**](CustomApiDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of custom APIs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_list_by_resource_group**
> CustomApiDefinitionCollection custom_apis_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, skiptoken=skiptoken)

List of custom APIs

Gets a list of all custom APIs in a subscription for a specific resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_definition_collection import CustomApiDefinitionCollection
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_version = 'api_version_example' # str | API Version
    top = 56 # int | The number of items to be included in the result (optional)
    skiptoken = 'skiptoken_example' # str | Skip Token (optional)

    try:
        # List of custom APIs
        api_response = api_instance.custom_apis_list_by_resource_group(subscription_id, resource_group_name, api_version, top=top, skiptoken=skiptoken)
        print("The response of CustomAPIsApi->custom_apis_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_version** | **str**| API Version | 
 **top** | **int**| The number of items to be included in the result | [optional] 
 **skiptoken** | **str**| Skip Token | [optional] 

### Return type

[**CustomApiDefinitionCollection**](CustomApiDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of custom APIs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_list_wsdl_interfaces**
> WsdlServiceCollection custom_apis_list_wsdl_interfaces(subscription_id, location, api_version, wsdl_definition)

Lists WSDL interfaces

This returns the list of interfaces in the WSDL

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wsdl_definition import WsdlDefinition
from openapi_client.models.wsdl_service_collection import WsdlServiceCollection
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    location = 'location_example' # str | The location
    api_version = 'api_version_example' # str | API Version
    wsdl_definition = openapi_client.WsdlDefinition() # WsdlDefinition | WSDL definition

    try:
        # Lists WSDL interfaces
        api_response = api_instance.custom_apis_list_wsdl_interfaces(subscription_id, location, api_version, wsdl_definition)
        print("The response of CustomAPIsApi->custom_apis_list_wsdl_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_list_wsdl_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **location** | **str**| The location | 
 **api_version** | **str**| API Version | 
 **wsdl_definition** | [**WsdlDefinition**](WsdlDefinition.md)| WSDL definition | 

### Return type

[**WsdlServiceCollection**](WsdlServiceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of interfaces |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_move**
> custom_apis_move(subscription_id, resource_group_name, api_name, api_version, custom_api_reference)

Moves the custom API

Moves a specific custom API

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_reference import CustomApiReference
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_name = 'api_name_example' # str | API name
    api_version = 'api_version_example' # str | API Version
    custom_api_reference = openapi_client.CustomApiReference() # CustomApiReference | The custom API reference

    try:
        # Moves the custom API
        api_instance.custom_apis_move(subscription_id, resource_group_name, api_name, api_version, custom_api_reference)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_name** | **str**| API name | 
 **api_version** | **str**| API Version | 
 **custom_api_reference** | [**CustomApiReference**](CustomApiReference.md)| The custom API reference | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom API successfully moved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_apis_update**
> CustomApiDefinition custom_apis_update(subscription_id, resource_group_name, api_name, api_version, custom_api)

Update an existing custom API

Updates an existing custom API's tags

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_api_definition import CustomApiDefinition
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
    api_instance = openapi_client.CustomAPIsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    resource_group_name = 'resource_group_name_example' # str | The resource group
    api_name = 'api_name_example' # str | API name
    api_version = 'api_version_example' # str | API Version
    custom_api = openapi_client.CustomApiDefinition() # CustomApiDefinition | The custom API

    try:
        # Update an existing custom API
        api_response = api_instance.custom_apis_update(subscription_id, resource_group_name, api_name, api_version, custom_api)
        print("The response of CustomAPIsApi->custom_apis_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAPIsApi->custom_apis_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **resource_group_name** | **str**| The resource group | 
 **api_name** | **str**| API name | 
 **api_version** | **str**| API Version | 
 **custom_api** | [**CustomApiDefinition**](CustomApiDefinition.md)| The custom API | 

### Return type

[**CustomApiDefinition**](CustomApiDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated custom API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

