# openapi_client.ApiVersionSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_version_set_create_or_update**](ApiVersionSetsApi.md#api_version_set_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets/{versionSetId} | 
[**api_version_set_delete**](ApiVersionSetsApi.md#api_version_set_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets/{versionSetId} | 
[**api_version_set_get**](ApiVersionSetsApi.md#api_version_set_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets/{versionSetId} | 
[**api_version_set_get_entity_tag**](ApiVersionSetsApi.md#api_version_set_get_entity_tag) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets/{versionSetId} | 
[**api_version_set_list_by_service**](ApiVersionSetsApi.md#api_version_set_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets | 
[**api_version_set_update**](ApiVersionSetsApi.md#api_version_set_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/api-version-sets/{versionSetId} | 


# **api_version_set_create_or_update**
> ApiVersionSetContract api_version_set_create_or_update(resource_group_name, service_name, api_version, subscription_id, version_set_id, parameters, if_match=if_match)



Creates or Updates a Api Version Set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_version_set_contract import ApiVersionSetContract
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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    version_set_id = 'version_set_id_example' # str | Api Version Set identifier. Must be unique in the current API Management service instance.
    parameters = openapi_client.ApiVersionSetContract() # ApiVersionSetContract | Create or update parameters.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the user to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation. (optional)

    try:
        api_response = api_instance.api_version_set_create_or_update(resource_group_name, service_name, api_version, subscription_id, version_set_id, parameters, if_match=if_match)
        print("The response of ApiVersionSetsApi->api_version_set_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **version_set_id** | **str**| Api Version Set identifier. Must be unique in the current API Management service instance. | 
 **parameters** | [**ApiVersionSetContract**](ApiVersionSetContract.md)| Create or update parameters. | 
 **if_match** | **str**| The entity state (Etag) version of the user to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | [optional] 

### Return type

[**ApiVersionSetContract**](ApiVersionSetContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Api Version Set was successfully updated. |  -  |
**201** | Api Version Set was successfully created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_version_set_delete**
> api_version_set_delete(resource_group_name, service_name, api_version, subscription_id, version_set_id, if_match)



Deletes specific Api Version Set.

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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    version_set_id = 'version_set_id_example' # str | Api Version Set identifier. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the Api Version Set to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation.

    try:
        api_instance.api_version_set_delete(resource_group_name, service_name, api_version, subscription_id, version_set_id, if_match)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **version_set_id** | **str**| Api Version Set identifier. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| The entity state (Etag) version of the Api Version Set to delete. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 

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
**204** | The ApiVersion Set details were successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_version_set_get**
> ApiVersionSetContract api_version_set_get(resource_group_name, service_name, api_version, subscription_id, version_set_id)



Gets the details of the Api Version Set specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_version_set_contract import ApiVersionSetContract
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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    version_set_id = 'version_set_id_example' # str | Api Version Set identifier. Must be unique in the current API Management service instance.

    try:
        api_response = api_instance.api_version_set_get(resource_group_name, service_name, api_version, subscription_id, version_set_id)
        print("The response of ApiVersionSetsApi->api_version_set_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **version_set_id** | **str**| Api Version Set identifier. Must be unique in the current API Management service instance. | 

### Return type

[**ApiVersionSetContract**](ApiVersionSetContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the specified Api Version Set entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_version_set_get_entity_tag**
> api_version_set_get_entity_tag(resource_group_name, service_name, api_version, subscription_id, version_set_id)



Gets the entity state (Etag) version of the Api Version Set specified by its identifier.

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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    version_set_id = 'version_set_id_example' # str | Api Version Set identifier. Must be unique in the current API Management service instance.

    try:
        api_instance.api_version_set_get_entity_tag(resource_group_name, service_name, api_version, subscription_id, version_set_id)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_get_entity_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **version_set_id** | **str**| Api Version Set identifier. Must be unique in the current API Management service instance. | 

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
**200** | Specified Api Version Set entity exists and current entity state version is present in the ETag header. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_version_set_list_by_service**
> ApiVersionSetCollection api_version_set_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists a collection of API Version Sets in the specified service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_version_set_collection import ApiVersionSetCollection
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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | | Field            | Supported operators    | Supported functions               | |------------------|------------------------|-----------------------------------| | id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state            | eq                     | N/A                               | | registrationDate | ge, le, eq, ne, gt, lt | N/A                               | | note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.api_version_set_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of ApiVersionSetsApi->api_version_set_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| | Field            | Supported operators    | Supported functions               | |------------------|------------------------|-----------------------------------| | id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state            | eq                     | N/A                               | | registrationDate | ge, le, eq, ne, gt, lt | N/A                               | | note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ApiVersionSetCollection**](ApiVersionSetCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of Api Version Set entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_version_set_update**
> api_version_set_update(resource_group_name, service_name, api_version, subscription_id, version_set_id, if_match, parameters)



Updates the details of the Api VersionSet specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_version_set_update_parameters import ApiVersionSetUpdateParameters
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
    api_instance = openapi_client.ApiVersionSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    version_set_id = 'version_set_id_example' # str | Api Version Set identifier. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the user to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    parameters = openapi_client.ApiVersionSetUpdateParameters() # ApiVersionSetUpdateParameters | Update parameters.

    try:
        api_instance.api_version_set_update(resource_group_name, service_name, api_version, subscription_id, version_set_id, if_match, parameters)
    except Exception as e:
        print("Exception when calling ApiVersionSetsApi->api_version_set_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **version_set_id** | **str**| Api Version Set identifier. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| The entity state (Etag) version of the user to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **parameters** | [**ApiVersionSetUpdateParameters**](ApiVersionSetUpdateParameters.md)| Update parameters. | 

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
**204** | The Api Version Set details were successfully updated. |  -  |
**0** | *** Error Responses: ***   * 4XX Error response giving details why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

