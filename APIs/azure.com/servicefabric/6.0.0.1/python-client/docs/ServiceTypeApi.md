# openapi_client.ServiceTypeApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deployed_service_type_info_by_name**](ServiceTypeApi.md#get_deployed_service_type_info_by_name) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetServiceTypes/{serviceTypeName} | Gets the information about a specified service type of the application deployed on a node in a Service Fabric cluster.
[**get_deployed_service_type_info_list**](ServiceTypeApi.md#get_deployed_service_type_info_list) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetServiceTypes | Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster.
[**get_service_manifest**](ServiceTypeApi.md#get_service_manifest) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetServiceManifest | Gets the manifest describing a service type.
[**get_service_type_info_list**](ServiceTypeApi.md#get_service_type_info_list) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetServiceTypes | Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster.


# **get_deployed_service_type_info_by_name**
> List[DeployedServiceTypeInfo] get_deployed_service_type_info_by_name(api_version, node_name, application_id, service_type_name, service_manifest_name=service_manifest_name, timeout=timeout)

Gets the information about a specified service type of the application deployed on a node in a Service Fabric cluster.

Gets the list containing the information about a specific service type from the applications deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation id of the service package. Each entry represents one activation of a service type, differentiated by the activation id.

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_type_info import DeployedServiceTypeInfo
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
    api_instance = openapi_client.ServiceTypeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric://myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    service_type_name = 'service_type_name_example' # str | Specifies the name of a Service Fabric service type.
    service_manifest_name = 'service_manifest_name_example' # str | The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the information about a specified service type of the application deployed on a node in a Service Fabric cluster.
        api_response = api_instance.get_deployed_service_type_info_by_name(api_version, node_name, application_id, service_type_name, service_manifest_name=service_manifest_name, timeout=timeout)
        print("The response of ServiceTypeApi->get_deployed_service_type_info_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTypeApi->get_deployed_service_type_info_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric://myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **service_type_name** | **str**| Specifies the name of a Service Fabric service type. | 
 **service_manifest_name** | **str**| The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[DeployedServiceTypeInfo]**](DeployedServiceTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about service types of an application deployed on a node. |  -  |
**204** | An empty response is returned if the specified service type of the application is not deployed on the node. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deployed_service_type_info_list**
> List[DeployedServiceTypeInfo] get_deployed_service_type_info_list(api_version, node_name, application_id, service_manifest_name=service_manifest_name, timeout=timeout)

Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster.

Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster. The response includes the name of the service type, its registration status, the code package that registered it and activation id of the service package.

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_type_info import DeployedServiceTypeInfo
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
    api_instance = openapi_client.ServiceTypeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric://myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    service_manifest_name = 'service_manifest_name_example' # str | The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list containing the information about service types from the applications deployed on a node in a Service Fabric cluster.
        api_response = api_instance.get_deployed_service_type_info_list(api_version, node_name, application_id, service_manifest_name=service_manifest_name, timeout=timeout)
        print("The response of ServiceTypeApi->get_deployed_service_type_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTypeApi->get_deployed_service_type_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric://myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **service_manifest_name** | **str**| The name of the service manifest to filter the list of deployed service type information. If specified, the response will only contain the information about service types that are defined in this service manifest. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[DeployedServiceTypeInfo]**](DeployedServiceTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of information about service types of an application deployed on a node. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_manifest**
> ServiceTypeManifest get_service_manifest(api_version, application_type_name, application_type_version, service_manifest_name, timeout=timeout)

Gets the manifest describing a service type.

Gets the manifest describing a service type. The response contains the service manifest XML as a string.

### Example


```python
import openapi_client
from openapi_client.models.service_type_manifest import ServiceTypeManifest
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
    api_instance = openapi_client.ServiceTypeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    application_type_name = 'application_type_name_example' # str | The name of the application type.
    application_type_version = 'application_type_version_example' # str | The version of the application type.
    service_manifest_name = 'service_manifest_name_example' # str | The name of a service manifest registered as part of an application type in a Service Fabric cluster.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the manifest describing a service type.
        api_response = api_instance.get_service_manifest(api_version, application_type_name, application_type_version, service_manifest_name, timeout=timeout)
        print("The response of ServiceTypeApi->get_service_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTypeApi->get_service_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **application_type_name** | **str**| The name of the application type. | 
 **application_type_version** | **str**| The version of the application type. | 
 **service_manifest_name** | **str**| The name of a service manifest registered as part of an application type in a Service Fabric cluster. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ServiceTypeManifest**](ServiceTypeManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the service type. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_type_info_list**
> List[ServiceTypeInfo] get_service_type_info_list(api_version, application_type_name, application_type_version, timeout=timeout)

Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster.

Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster. The response includes the name of the service type, the name and version of the service manifest the type is defined in, kind (stateless or stateless) of the service type and other information about it.

### Example


```python
import openapi_client
from openapi_client.models.service_type_info import ServiceTypeInfo
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
    api_instance = openapi_client.ServiceTypeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    application_type_name = 'application_type_name_example' # str | The name of the application type.
    application_type_version = 'application_type_version_example' # str | The version of the application type.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list containing the information about service types that are supported by a provisioned application type in a Service Fabric cluster.
        api_response = api_instance.get_service_type_info_list(api_version, application_type_name, application_type_version, timeout=timeout)
        print("The response of ServiceTypeApi->get_service_type_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceTypeApi->get_service_type_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **application_type_name** | **str**| The name of the application type. | 
 **application_type_version** | **str**| The version of the application type. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[ServiceTypeInfo]**](ServiceTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of service types that are supported by a provisioned application type. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

