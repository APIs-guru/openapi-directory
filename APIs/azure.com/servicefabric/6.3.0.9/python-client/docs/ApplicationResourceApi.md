# openapi_client.ApplicationResourceApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_application_resource**](ApplicationResourceApi.md#create_application_resource) | **PUT** /Resources/Applications/{applicationResourceName} | Creates or updates an application resource.
[**delete_application_resource**](ApplicationResourceApi.md#delete_application_resource) | **DELETE** /Resources/Applications/{applicationResourceName} | Deletes the specified application.
[**get_application_resource**](ApplicationResourceApi.md#get_application_resource) | **GET** /Resources/Applications/{applicationResourceName} | Gets the application with the given name.
[**get_replica**](ApplicationResourceApi.md#get_replica) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName}/Replicas/{replicaName} | Gets a specific replica of a given service in an application resource.
[**get_replicas**](ApplicationResourceApi.md#get_replicas) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName}/replicas | Gets replicas of a given service in an application resource.
[**get_service**](ApplicationResourceApi.md#get_service) | **GET** /Resources/Applications/{applicationResourceName}/Services/{serviceResourceName} | Gets the description of the specified service in an application resource.
[**get_services**](ApplicationResourceApi.md#get_services) | **GET** /Resources/Applications/{applicationResourceName}/Services | Gets all the services in the application resource.


# **create_application_resource**
> create_application_resource(api_version, application_resource_name, application_resource_description)

Creates or updates an application resource.

Creates an application with the specified name and description. If an application with the same name already exists, then its description are updated to the one indicated in this request.

### Example


```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.
    application_resource_description = openapi_client.ApplicationResourceDescription() # ApplicationResourceDescription | Description for creating an application resource.

    try:
        # Creates or updates an application resource.
        api_instance.create_application_resource(api_version, application_resource_name, application_resource_description)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->create_application_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 
 **application_resource_description** | [**ApplicationResourceDescription**](ApplicationResourceDescription.md)| Description for creating an application resource. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_application_resource**
> delete_application_resource(api_version, application_resource_name)

Deletes the specified application.

Deletes the application identified by the name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.

    try:
        # Deletes the specified application.
        api_instance.delete_application_resource(api_version, application_resource_name)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->delete_application_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content - the specified application was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_resource**
> ApplicationResourceDescription get_application_resource(api_version, application_resource_name)

Gets the application with the given name.

Gets the application with the given name. This includes the information about the application's services and other runtime information.

### Example


```python
import openapi_client
from openapi_client.models.application_resource_description import ApplicationResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.

    try:
        # Gets the application with the given name.
        api_response = api_instance.get_application_resource(api_version, application_resource_name)
        print("The response of ApplicationResourceApi->get_application_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->get_application_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 

### Return type

[**ApplicationResourceDescription**](ApplicationResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replica**
> ServiceResourceReplicaDescription get_replica(api_version, application_resource_name, service_resource_name, replica_name)

Gets a specific replica of a given service in an application resource.

Gets the information about the specified replica of a given service of an application. The information includes the runtime properties of the replica instance.

### Example


```python
import openapi_client
from openapi_client.models.service_resource_replica_description import ServiceResourceReplicaDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.
    service_resource_name = 'service_resource_name_example' # str | Service Fabric service resource name.
    replica_name = 'replica_name_example' # str | Service Fabric replica name.

    try:
        # Gets a specific replica of a given service in an application resource.
        api_response = api_instance.get_replica(api_version, application_resource_name, service_resource_name, replica_name)
        print("The response of ApplicationResourceApi->get_replica:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->get_replica: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 
 **service_resource_name** | **str**| Service Fabric service resource name. | 
 **replica_name** | **str**| Service Fabric replica name. | 

### Return type

[**ServiceResourceReplicaDescription**](ServiceResourceReplicaDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replicas**
> PagedServiceResourceReplicaDescriptionList get_replicas(api_version, application_resource_name, service_resource_name)

Gets replicas of a given service in an application resource.

Gets the information about all replicas of a given service of an application. The information includes the runtime properties of the replica instance.

### Example


```python
import openapi_client
from openapi_client.models.paged_service_resource_replica_description_list import PagedServiceResourceReplicaDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.
    service_resource_name = 'service_resource_name_example' # str | Service Fabric service resource name.

    try:
        # Gets replicas of a given service in an application resource.
        api_response = api_instance.get_replicas(api_version, application_resource_name, service_resource_name)
        print("The response of ApplicationResourceApi->get_replicas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->get_replicas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 
 **service_resource_name** | **str**| Service Fabric service resource name. | 

### Return type

[**PagedServiceResourceReplicaDescriptionList**](PagedServiceResourceReplicaDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service**
> ServiceResourceDescription get_service(api_version, application_resource_name, service_resource_name)

Gets the description of the specified service in an application resource.

Gets the description of the service resource.

### Example


```python
import openapi_client
from openapi_client.models.service_resource_description import ServiceResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.
    service_resource_name = 'service_resource_name_example' # str | Service Fabric service resource name.

    try:
        # Gets the description of the specified service in an application resource.
        api_response = api_instance.get_service(api_version, application_resource_name, service_resource_name)
        print("The response of ApplicationResourceApi->get_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->get_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 
 **service_resource_name** | **str**| Service Fabric service resource name. | 

### Return type

[**ServiceResourceDescription**](ServiceResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_services**
> PagedServiceResourceDescriptionList get_services(api_version, application_resource_name)

Gets all the services in the application resource.

The operation returns the service descriptions of all the services in the application resource. 

### Example


```python
import openapi_client
from openapi_client.models.paged_service_resource_description_list import PagedServiceResourceDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationResourceApi(api_client)
    api_version = 6.3-preview # str | The version of the API. This parameter is required and its value must be '6.3-preview'. (default to 6.3-preview)
    application_resource_name = 'application_resource_name_example' # str | Service Fabric application resource name.

    try:
        # Gets all the services in the application resource.
        api_response = api_instance.get_services(api_version, application_resource_name)
        print("The response of ApplicationResourceApi->get_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationResourceApi->get_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.3-preview&#39;. | [default to 6.3-preview]
 **application_resource_name** | **str**| Service Fabric application resource name. | 

### Return type

[**PagedServiceResourceDescriptionList**](PagedServiceResourceDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

