# openapi_client.CodePackageApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_container_logs_deployed_on_node**](CodePackageApi.md#get_container_logs_deployed_on_node) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetCodePackages/$/ContainerLogs | Gets the container logs for container deployed on a Service Fabric node.
[**get_deployed_code_package_info_list**](CodePackageApi.md#get_deployed_code_package_info_list) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetCodePackages | Gets the list of code packages deployed on a Service Fabric node.
[**restart_deployed_code_package**](CodePackageApi.md#restart_deployed_code_package) | **POST** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetCodePackages/$/Restart | Restarts a code package deployed on a Service Fabric node in a cluster.


# **get_container_logs_deployed_on_node**
> ContainerLogs get_container_logs_deployed_on_node(api_version, node_name, application_id, service_manifest_name, code_package_name, tail=tail, timeout=timeout)

Gets the container logs for container deployed on a Service Fabric node.

Gets the container logs for container deployed on a Service Fabric node for the given code package.

### Example


```python
import openapi_client
from openapi_client.models.container_logs import ContainerLogs
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
    api_instance = openapi_client.CodePackageApi(api_client)
    api_version = 6.1 # str | The version of this API. This is a required parameter and its value must be \"6.1\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.1)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions. 
    service_manifest_name = 'service_manifest_name_example' # str | The name of a service manifest registered as part of an application type in a Service Fabric cluster.
    code_package_name = 'code_package_name_example' # str | The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster.
    tail = 'tail_example' # str | Number of lines to fetch from tail end. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the container logs for container deployed on a Service Fabric node.
        api_response = api_instance.get_container_logs_deployed_on_node(api_version, node_name, application_id, service_manifest_name, code_package_name, tail=tail, timeout=timeout)
        print("The response of CodePackageApi->get_container_logs_deployed_on_node:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodePackageApi->get_container_logs_deployed_on_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.1\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.1]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions.  | 
 **service_manifest_name** | **str**| The name of a service manifest registered as part of an application type in a Service Fabric cluster. | 
 **code_package_name** | **str**| The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster. | 
 **tail** | **str**| Number of lines to fetch from tail end. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ContainerLogs**](ContainerLogs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the container logs for container deployed on a Service Fabric node for the given code package. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deployed_code_package_info_list**
> List[DeployedCodePackageInfo] get_deployed_code_package_info_list(api_version, node_name, application_id, service_manifest_name=service_manifest_name, code_package_name=code_package_name, timeout=timeout)

Gets the list of code packages deployed on a Service Fabric node.

Gets the list of code packages deployed on a Service Fabric node for the given application.

### Example


```python
import openapi_client
from openapi_client.models.deployed_code_package_info import DeployedCodePackageInfo
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
    api_instance = openapi_client.CodePackageApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions. 
    service_manifest_name = 'service_manifest_name_example' # str | The name of a service manifest registered as part of an application type in a Service Fabric cluster. (optional)
    code_package_name = 'code_package_name_example' # str | The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of code packages deployed on a Service Fabric node.
        api_response = api_instance.get_deployed_code_package_info_list(api_version, node_name, application_id, service_manifest_name=service_manifest_name, code_package_name=code_package_name, timeout=timeout)
        print("The response of CodePackageApi->get_deployed_code_package_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodePackageApi->get_deployed_code_package_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions.  | 
 **service_manifest_name** | **str**| The name of a service manifest registered as part of an application type in a Service Fabric cluster. | [optional] 
 **code_package_name** | **str**| The name of code package specified in service manifest registered as part of an application type in a Service Fabric cluster. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[DeployedCodePackageInfo]**](DeployedCodePackageInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the list of deployed code packages information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restart_deployed_code_package**
> restart_deployed_code_package(api_version, node_name, application_id, restart_deployed_code_package_description, timeout=timeout)

Restarts a code package deployed on a Service Fabric node in a cluster.

Restarts a code package deployed on a Service Fabric node in a cluster. This aborts the code package process, which will restart all the user service replicas hosted in that process.

### Example


```python
import openapi_client
from openapi_client.models.restart_deployed_code_package_description import RestartDeployedCodePackageDescription
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
    api_instance = openapi_client.CodePackageApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions. 
    restart_deployed_code_package_description = openapi_client.RestartDeployedCodePackageDescription() # RestartDeployedCodePackageDescription | Describes the deployed code package on Service Fabric node to restart.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Restarts a code package deployed on a Service Fabric node in a cluster.
        api_instance.restart_deployed_code_package(api_version, node_name, application_id, restart_deployed_code_package_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling CodePackageApi->restart_deployed_code_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions.  | 
 **restart_deployed_code_package_description** | [**RestartDeployedCodePackageDescription**](RestartDeployedCodePackageDescription.md)| Describes the deployed code package on Service Fabric node to restart. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

