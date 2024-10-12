# openapi_client.InfrastructureApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoke_infrastructure_command**](InfrastructureApi.md#invoke_infrastructure_command) | **POST** /$/InvokeInfrastructureCommand | Invokes an administrative command on the given Infrastructure Service instance.
[**invoke_infrastructure_query**](InfrastructureApi.md#invoke_infrastructure_query) | **GET** /$/InvokeInfrastructureQuery | Invokes a read-only query on the given infrastructure service instance.


# **invoke_infrastructure_command**
> bytearray invoke_infrastructure_command(api_version, command, service_id=service_id, timeout=timeout)

Invokes an administrative command on the given Infrastructure Service instance.

For clusters that have one or more instances of the Infrastructure Service configured, this API provides a way to send infrastructure-specific commands to a particular instance of the Infrastructure Service.  Available commands and their corresponding response formats vary depending upon the infrastructure on which the cluster is running.  This API supports the Service Fabric platform; it is not meant to be used directly from your code.

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
    api_instance = openapi_client.InfrastructureApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    command = 'command_example' # str | The text of the command to be invoked. The content of the command is infrastructure-specific.
    service_id = 'service_id_example' # str | The identity of the infrastructure service. This is  the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Invokes an administrative command on the given Infrastructure Service instance.
        api_response = api_instance.invoke_infrastructure_command(api_version, command, service_id=service_id, timeout=timeout)
        print("The response of InfrastructureApi->invoke_infrastructure_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfrastructureApi->invoke_infrastructure_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **command** | **str**| The text of the command to be invoked. The content of the command is infrastructure-specific. | 
 **service_id** | **str**| The identity of the infrastructure service. This is  the full name of the infrastructure service without the &#39;fabric:&#39; URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response from the infrastructure service. The response format is a JSON stream. The contents of the response depend on which command was issued. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoke_infrastructure_query**
> bytearray invoke_infrastructure_query(api_version, command, service_id=service_id, timeout=timeout)

Invokes a read-only query on the given infrastructure service instance.

For clusters that have one or more instances of the Infrastructure Service configured, this API provides a way to send infrastructure-specific queries to a particular instance of the Infrastructure Service.  Available commands and their corresponding response formats vary depending upon the infrastructure on which the cluster is running.  This API supports the Service Fabric platform; it is not meant to be used directly from your code.

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
    api_instance = openapi_client.InfrastructureApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    command = 'command_example' # str | The text of the command to be invoked. The content of the command is infrastructure-specific.
    service_id = 'service_id_example' # str | The identity of the infrastructure service. This is  the full name of the infrastructure service without the 'fabric:' URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Invokes a read-only query on the given infrastructure service instance.
        api_response = api_instance.invoke_infrastructure_query(api_version, command, service_id=service_id, timeout=timeout)
        print("The response of InfrastructureApi->invoke_infrastructure_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfrastructureApi->invoke_infrastructure_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **command** | **str**| The text of the command to be invoked. The content of the command is infrastructure-specific. | 
 **service_id** | **str**| The identity of the infrastructure service. This is  the full name of the infrastructure service without the &#39;fabric:&#39; URI scheme. This parameter required only for the cluster that have more than one instance of infrastructure service running. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response from the infrastructure service. The response format is a JSON stream. The contents of the response depend on which command was issued. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

