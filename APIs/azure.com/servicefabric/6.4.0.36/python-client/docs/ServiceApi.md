# openapi_client.ServiceApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_service**](ServiceApi.md#create_service) | **POST** /Applications/{applicationId}/$/GetServices/$/Create | Creates the specified Service Fabric service.
[**create_service_from_template**](ServiceApi.md#create_service_from_template) | **POST** /Applications/{applicationId}/$/GetServices/$/CreateFromTemplate | Creates a Service Fabric service from the service template.
[**delete_service**](ServiceApi.md#delete_service) | **POST** /Services/{serviceId}/$/Delete | Deletes an existing Service Fabric service.
[**get_application_name_info**](ServiceApi.md#get_application_name_info) | **GET** /Services/{serviceId}/$/GetApplicationName | Gets the name of the Service Fabric application for a service.
[**get_service_description**](ServiceApi.md#get_service_description) | **GET** /Services/{serviceId}/$/GetDescription | Gets the description of an existing Service Fabric service.
[**get_service_health**](ServiceApi.md#get_service_health) | **GET** /Services/{serviceId}/$/GetHealth | Gets the health of the specified Service Fabric service.
[**get_service_health_using_policy**](ServiceApi.md#get_service_health_using_policy) | **POST** /Services/{serviceId}/$/GetHealth | Gets the health of the specified Service Fabric service, by using the specified health policy.
[**get_service_info**](ServiceApi.md#get_service_info) | **GET** /Applications/{applicationId}/$/GetServices/{serviceId} | Gets the information about the specific service belonging to the Service Fabric application.
[**get_service_info_list**](ServiceApi.md#get_service_info_list) | **GET** /Applications/{applicationId}/$/GetServices | Gets the information about all services belonging to the application specified by the application ID.
[**report_service_health**](ServiceApi.md#report_service_health) | **POST** /Services/{serviceId}/$/ReportHealth | Sends a health report on the Service Fabric service.
[**resolve_service**](ServiceApi.md#resolve_service) | **GET** /Services/{serviceId}/$/ResolvePartition | Resolve a Service Fabric partition.
[**update_service**](ServiceApi.md#update_service) | **POST** /Services/{serviceId}/$/Update | Updates a Service Fabric service using the specified update description.


# **create_service**
> create_service(api_version, application_id, service_description, timeout=timeout)

Creates the specified Service Fabric service.

This api allows creating a new Service Fabric stateless or stateful service under a specified Service Fabric application. The description for creating the service includes partitioning information and optional properties for placement and load balancing. Some of the properties can later be modified using `UpdateService` API.

### Example


```python
import openapi_client
from openapi_client.models.service_description import ServiceDescription
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    service_description = openapi_client.ServiceDescription() # ServiceDescription | The information necessary to create a service.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates the specified Service Fabric service.
        api_instance.create_service(api_version, application_id, service_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ServiceApi->create_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **service_description** | [**ServiceDescription**](ServiceDescription.md)| The information necessary to create a service. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A successful operation will return 202 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_service_from_template**
> create_service_from_template(api_version, application_id, service_from_template_description, timeout=timeout)

Creates a Service Fabric service from the service template.

Creates a Service Fabric service from the service template defined in the application manifest. A service template contains the properties that will be same for the service instance of the same type. The API allows overriding the properties that are usually different for different services of the same service type.

### Example


```python
import openapi_client
from openapi_client.models.service_from_template_description import ServiceFromTemplateDescription
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    service_from_template_description = openapi_client.ServiceFromTemplateDescription() # ServiceFromTemplateDescription | Describes the service that needs to be created from the template defined in the application manifest.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates a Service Fabric service from the service template.
        api_instance.create_service_from_template(api_version, application_id, service_from_template_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ServiceApi->create_service_from_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **service_from_template_description** | [**ServiceFromTemplateDescription**](ServiceFromTemplateDescription.md)| Describes the service that needs to be created from the template defined in the application manifest. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A successful operation will return 202 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_service**
> delete_service(api_version, service_id, force_remove=force_remove, timeout=timeout)

Deletes an existing Service Fabric service.

A service must be created before it can be deleted. By default, Service Fabric will try to close service replicas in a graceful manner and then delete the service. However, if the service is having issues closing the replica gracefully, the delete operation may take a long time or get stuck. Use the optional ForceRemove flag to skip the graceful close sequence and forcefully delete the service.

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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    force_remove = True # bool | Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes an existing Service Fabric service.
        api_instance.delete_service(api_version, service_id, force_remove=force_remove, timeout=timeout)
    except Exception as e:
        print("Exception when calling ServiceApi->delete_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **force_remove** | **bool**| Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_name_info**
> ApplicationNameInfo get_application_name_info(api_version, service_id, timeout=timeout)

Gets the name of the Service Fabric application for a service.

Gets the name of the application for the specified service. A 404 FABRIC_E_SERVICE_DOES_NOT_EXIST error is returned if a service with the provided service ID does not exist.

### Example


```python
import openapi_client
from openapi_client.models.application_name_info import ApplicationNameInfo
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the name of the Service Fabric application for a service.
        api_response = api_instance.get_application_name_info(api_version, service_id, timeout=timeout)
        print("The response of ServiceApi->get_application_name_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_application_name_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ApplicationNameInfo**](ApplicationNameInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the name of the application for the specified service. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_description**
> ServiceDescription get_service_description(api_version, service_id, timeout=timeout)

Gets the description of an existing Service Fabric service.

Gets the description of an existing Service Fabric service. A service must be created before its description can be obtained.

### Example


```python
import openapi_client
from openapi_client.models.service_description import ServiceDescription
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the description of an existing Service Fabric service.
        api_response = api_instance.get_service_description(api_version, service_id, timeout=timeout)
        print("The response of ServiceApi->get_service_description:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_service_description: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ServiceDescription**](ServiceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_health**
> ServiceHealth get_service_health(api_version, service_id, events_health_state_filter=events_health_state_filter, partitions_health_state_filter=partitions_health_state_filter, exclude_health_statistics=exclude_health_statistics, timeout=timeout)

Gets the health of the specified Service Fabric service.

Gets the health information of the specified service. Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state. Use PartitionsHealthStateFilter to filter the collection of partitions returned. If you specify a service that does not exist in the health store, this request returns an error.

### Example


```python
import openapi_client
from openapi_client.models.service_health import ServiceHealth
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    partitions_health_state_filter = 0 # int | Allows filtering of the partitions health state objects returned in the result of service health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only partitions that match the filter are returned. All partitions are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of partitions with HealthState value of OK (2) and Warning (4) will be returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    exclude_health_statistics = False # bool | Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error. (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the health of the specified Service Fabric service.
        api_response = api_instance.get_service_health(api_version, service_id, events_health_state_filter=events_health_state_filter, partitions_health_state_filter=partitions_health_state_filter, exclude_health_statistics=exclude_health_statistics, timeout=timeout)
        print("The response of ServiceApi->get_service_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_service_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **partitions_health_state_filter** | **int**| Allows filtering of the partitions health state objects returned in the result of service health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only partitions that match the filter are returned. All partitions are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of partitions with HealthState value of OK (2) and Warning (4) will be returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **exclude_health_statistics** | **bool**| Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error. | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ServiceHealth**](ServiceHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the health information of the specified service. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_health_using_policy**
> ServiceHealth get_service_health_using_policy(api_version, service_id, events_health_state_filter=events_health_state_filter, partitions_health_state_filter=partitions_health_state_filter, exclude_health_statistics=exclude_health_statistics, timeout=timeout, application_health_policy=application_health_policy)

Gets the health of the specified Service Fabric service, by using the specified health policy.

Gets the health information of the specified service. If the application health policy is specified, the health evaluation uses it to get the aggregated health state. If the policy is not specified, the health evaluation uses the application health policy defined in the application manifest, or the default health policy, if no policy is defined in the manifest. Use EventsHealthStateFilter to filter the collection of health events reported on the service based on the health state. Use PartitionsHealthStateFilter to filter the collection of partitions returned. If you specify a service that does not exist in the health store, this request returns an error.

### Example


```python
import openapi_client
from openapi_client.models.application_health_policy import ApplicationHealthPolicy
from openapi_client.models.service_health import ServiceHealth
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    partitions_health_state_filter = 0 # int | Allows filtering of the partitions health state objects returned in the result of service health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only partitions that match the filter are returned. All partitions are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of partitions with HealthState value of OK (2) and Warning (4) will be returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    exclude_health_statistics = False # bool | Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error. (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    application_health_policy = openapi_client.ApplicationHealthPolicy() # ApplicationHealthPolicy | Describes the health policies used to evaluate the health of an application or one of its children. If not present, the health evaluation uses the health policy from application manifest or the default health policy. (optional)

    try:
        # Gets the health of the specified Service Fabric service, by using the specified health policy.
        api_response = api_instance.get_service_health_using_policy(api_version, service_id, events_health_state_filter=events_health_state_filter, partitions_health_state_filter=partitions_health_state_filter, exclude_health_statistics=exclude_health_statistics, timeout=timeout, application_health_policy=application_health_policy)
        print("The response of ServiceApi->get_service_health_using_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_service_health_using_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **partitions_health_state_filter** | **int**| Allows filtering of the partitions health state objects returned in the result of service health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only partitions that match the filter are returned. All partitions are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of partitions with HealthState value of OK (2) and Warning (4) will be returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **exclude_health_statistics** | **bool**| Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error. | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md)| Describes the health policies used to evaluate the health of an application or one of its children. If not present, the health evaluation uses the health policy from application manifest or the default health policy. | [optional] 

### Return type

[**ServiceHealth**](ServiceHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the health information of the specified service. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_info**
> ServiceInfo get_service_info(application_id, service_id, api_version, timeout=timeout)

Gets the information about the specific service belonging to the Service Fabric application.

Returns the information about the specified service belonging to the specified Service Fabric application.

### Example


```python
import openapi_client
from openapi_client.models.service_info import ServiceInfo
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
    api_instance = openapi_client.ServiceApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the information about the specific service belonging to the Service Fabric application.
        api_response = api_instance.get_service_info(application_id, service_id, api_version, timeout=timeout)
        print("The response of ServiceApi->get_service_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_service_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ServiceInfo**](ServiceInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the specified service. |  -  |
**204** | An empty response is returned if the specified service is not part of the specified application. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_info_list**
> PagedServiceInfoList get_service_info_list(application_id, api_version, service_type_name=service_type_name, continuation_token=continuation_token, timeout=timeout)

Gets the information about all services belonging to the application specified by the application ID.

Returns the information about all services belonging to the application specified by the application ID.

### Example


```python
import openapi_client
from openapi_client.models.paged_service_info_list import PagedServiceInfoList
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
    api_instance = openapi_client.ServiceApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_type_name = 'service_type_name_example' # str | The service type name used to filter the services to query for. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the information about all services belonging to the application specified by the application ID.
        api_response = api_instance.get_service_info_list(application_id, api_version, service_type_name=service_type_name, continuation_token=continuation_token, timeout=timeout)
        print("The response of ServiceApi->get_service_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->get_service_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_type_name** | **str**| The service type name used to filter the services to query for. | [optional] 
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedServiceInfoList**](PagedServiceInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of services in the cluster for the specified application. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_service_health**
> report_service_health(api_version, service_id, health_information, immediate=immediate, timeout=timeout)

Sends a health report on the Service Fabric service.

Reports health state of the specified Service Fabric service. The report must contain the information about the source of the health report and property on which it is reported. The report is sent to a Service Fabric gateway Service, which forwards to the health store. The report may be accepted by the gateway, but rejected by the health store after extra validation. For example, the health store may reject the report because of an invalid parameter, like a stale sequence number. To see whether the report was applied in the health store, run GetServiceHealth and check that the report appears in the HealthEvents section.

### Example


```python
import openapi_client
from openapi_client.models.health_information import HealthInformation
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    health_information = openapi_client.HealthInformation() # HealthInformation | Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager.
    immediate = False # bool | A flag that indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from HTTP Gateway to the health store, regardless of the fabric client settings that the HTTP Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the HTTP Gateway is closed or the message doesn't reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the HTTP Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately. (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Sends a health report on the Service Fabric service.
        api_instance.report_service_health(api_version, service_id, health_information, immediate=immediate, timeout=timeout)
    except Exception as e:
        print("Exception when calling ServiceApi->report_service_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **health_information** | [**HealthInformation**](HealthInformation.md)| Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager. | 
 **immediate** | **bool**| A flag that indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from HTTP Gateway to the health store, regardless of the fabric client settings that the HTTP Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the HTTP Gateway is closed or the message doesn&#39;t reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the HTTP Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately. | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve_service**
> ResolvedServicePartition resolve_service(api_version, service_id, partition_key_type=partition_key_type, partition_key_value=partition_key_value, previous_rsp_version=previous_rsp_version, timeout=timeout)

Resolve a Service Fabric partition.

Resolve a Service Fabric service partition to get the endpoints of the service replicas.

### Example


```python
import openapi_client
from openapi_client.models.resolved_service_partition import ResolvedServicePartition
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_key_type = 56 # int | Key type for the partition. This parameter is required if the partition scheme for the service is Int64Range or Named. The possible values are following. - None (1) - Indicates that the PartitionKeyValue parameter is not specified. This is valid for the partitions with partitioning scheme as Singleton. This is the default value. The value is 1. - Int64Range (2) - Indicates that the PartitionKeyValue parameter is an int64 partition key. This is valid for the partitions with partitioning scheme as Int64Range. The value is 2. - Named (3) - Indicates that the PartitionKeyValue parameter is a name of the partition. This is valid for the partitions with partitioning scheme as Named. The value is 3. (optional)
    partition_key_value = 'partition_key_value_example' # str | Partition key. This is required if the partition scheme for the service is Int64Range or Named.  This is not the partition ID, but rather, either the integer key value, or the name of the partition ID. For example, if your service is using ranged partitions from 0 to 10, then they PartitionKeyValue would be an integer in that range. Query service description to see the range or name. (optional)
    previous_rsp_version = 'previous_rsp_version_example' # str | The value in the Version field of the response that was received previously. This is required if the user knows that the result that was gotten previously is stale. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Resolve a Service Fabric partition.
        api_response = api_instance.resolve_service(api_version, service_id, partition_key_type=partition_key_type, partition_key_value=partition_key_value, previous_rsp_version=previous_rsp_version, timeout=timeout)
        print("The response of ServiceApi->resolve_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->resolve_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_key_type** | **int**| Key type for the partition. This parameter is required if the partition scheme for the service is Int64Range or Named. The possible values are following. - None (1) - Indicates that the PartitionKeyValue parameter is not specified. This is valid for the partitions with partitioning scheme as Singleton. This is the default value. The value is 1. - Int64Range (2) - Indicates that the PartitionKeyValue parameter is an int64 partition key. This is valid for the partitions with partitioning scheme as Int64Range. The value is 2. - Named (3) - Indicates that the PartitionKeyValue parameter is a name of the partition. This is valid for the partitions with partitioning scheme as Named. The value is 3. | [optional] 
 **partition_key_value** | **str**| Partition key. This is required if the partition scheme for the service is Int64Range or Named.  This is not the partition ID, but rather, either the integer key value, or the name of the partition ID. For example, if your service is using ranged partitions from 0 to 10, then they PartitionKeyValue would be an integer in that range. Query service description to see the range or name. | [optional] 
 **previous_rsp_version** | **str**| The value in the Version field of the response that was received previously. This is required if the user knows that the result that was gotten previously is stale. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ResolvedServicePartition**](ResolvedServicePartition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_service**
> update_service(api_version, service_id, service_update_description, timeout=timeout)

Updates a Service Fabric service using the specified update description.

This API allows updating properties of a running Service Fabric service. The set of properties that can be updated are a subset of the properties that were specified at the time of creating the service. The current set of properties can be obtained using `GetServiceDescription` API. Note that updating the properties of a running service is different than upgrading your application using `StartApplicationUpgrade` API. The upgrade is a long running background operation that involves moving the application from one version to another, one upgrade domain at a time, whereas update applies the new properties immediately to the service.

### Example


```python
import openapi_client
from openapi_client.models.service_update_description import ServiceUpdateDescription
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
    api_instance = openapi_client.ServiceApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    service_update_description = openapi_client.ServiceUpdateDescription() # ServiceUpdateDescription | The information necessary to update a service.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Updates a Service Fabric service using the specified update description.
        api_instance.update_service(api_version, service_id, service_update_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ServiceApi->update_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **service_update_description** | [**ServiceUpdateDescription**](ServiceUpdateDescription.md)| The information necessary to update a service. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful operation will return 202 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

