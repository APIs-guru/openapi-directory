# openapi_client.ClusterVersionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cluster_versions_get**](ClusterVersionApi.md#cluster_versions_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions/{clusterVersion} | Gets information about a Service Fabric cluster code version available in the specified location.
[**cluster_versions_get_by_environment**](ClusterVersionApi.md#cluster_versions_get_by_environment) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions/{clusterVersion} | Gets information about a Service Fabric cluster code version available for the specified environment.
[**cluster_versions_list**](ClusterVersionApi.md#cluster_versions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions | Gets the list of Service Fabric cluster code versions available for the specified location.
[**cluster_versions_list_by_environment**](ClusterVersionApi.md#cluster_versions_list_by_environment) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions | Gets the list of Service Fabric cluster code versions available for the specified environment.


# **cluster_versions_get**
> ClusterCodeVersionsListResult cluster_versions_get(location, api_version, subscription_id, cluster_version)

Gets information about a Service Fabric cluster code version available in the specified location.

Gets information about an available Service Fabric cluster code version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_code_versions_list_result import ClusterCodeVersionsListResult
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
    api_instance = openapi_client.ClusterVersionApi(api_client)
    location = 'location_example' # str | The location for the cluster code versions. This is different from cluster location.
    api_version = 2018-02-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2018-02-01\" for this specification. (default to 2018-02-01)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    cluster_version = 'cluster_version_example' # str | The cluster code version.

    try:
        # Gets information about a Service Fabric cluster code version available in the specified location.
        api_response = api_instance.cluster_versions_get(location, api_version, subscription_id, cluster_version)
        print("The response of ClusterVersionApi->cluster_versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterVersionApi->cluster_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location for the cluster code versions. This is different from cluster location. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2018-02-01\&quot; for this specification. | [default to 2018-02-01]
 **subscription_id** | **str**| The customer subscription identifier. | 
 **cluster_version** | **str**| The cluster code version. | 

### Return type

[**ClusterCodeVersionsListResult**](ClusterCodeVersionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_versions_get_by_environment**
> ClusterCodeVersionsListResult cluster_versions_get_by_environment(location, environment, api_version, subscription_id, cluster_version)

Gets information about a Service Fabric cluster code version available for the specified environment.

Gets information about an available Service Fabric cluster code version by environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_code_versions_list_result import ClusterCodeVersionsListResult
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
    api_instance = openapi_client.ClusterVersionApi(api_client)
    location = 'location_example' # str | The location for the cluster code versions. This is different from cluster location.
    environment = 'environment_example' # str | The operating system of the cluster. The default means all.
    api_version = 2018-02-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2018-02-01\" for this specification. (default to 2018-02-01)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    cluster_version = 'cluster_version_example' # str | The cluster code version.

    try:
        # Gets information about a Service Fabric cluster code version available for the specified environment.
        api_response = api_instance.cluster_versions_get_by_environment(location, environment, api_version, subscription_id, cluster_version)
        print("The response of ClusterVersionApi->cluster_versions_get_by_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterVersionApi->cluster_versions_get_by_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location for the cluster code versions. This is different from cluster location. | 
 **environment** | **str**| The operating system of the cluster. The default means all. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2018-02-01\&quot; for this specification. | [default to 2018-02-01]
 **subscription_id** | **str**| The customer subscription identifier. | 
 **cluster_version** | **str**| The cluster code version. | 

### Return type

[**ClusterCodeVersionsListResult**](ClusterCodeVersionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_versions_list**
> ClusterCodeVersionsListResult cluster_versions_list(location, api_version, subscription_id)

Gets the list of Service Fabric cluster code versions available for the specified location.

Gets all available code versions for Service Fabric cluster resources by location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_code_versions_list_result import ClusterCodeVersionsListResult
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
    api_instance = openapi_client.ClusterVersionApi(api_client)
    location = 'location_example' # str | The location for the cluster code versions. This is different from cluster location.
    api_version = 2018-02-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2018-02-01\" for this specification. (default to 2018-02-01)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Gets the list of Service Fabric cluster code versions available for the specified location.
        api_response = api_instance.cluster_versions_list(location, api_version, subscription_id)
        print("The response of ClusterVersionApi->cluster_versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterVersionApi->cluster_versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location for the cluster code versions. This is different from cluster location. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2018-02-01\&quot; for this specification. | [default to 2018-02-01]
 **subscription_id** | **str**| The customer subscription identifier. | 

### Return type

[**ClusterCodeVersionsListResult**](ClusterCodeVersionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_versions_list_by_environment**
> ClusterCodeVersionsListResult cluster_versions_list_by_environment(location, environment, api_version, subscription_id)

Gets the list of Service Fabric cluster code versions available for the specified environment.

Gets all available code versions for Service Fabric cluster resources by environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_code_versions_list_result import ClusterCodeVersionsListResult
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
    api_instance = openapi_client.ClusterVersionApi(api_client)
    location = 'location_example' # str | The location for the cluster code versions. This is different from cluster location.
    environment = 'environment_example' # str | The operating system of the cluster. The default means all.
    api_version = 2018-02-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2018-02-01\" for this specification. (default to 2018-02-01)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Gets the list of Service Fabric cluster code versions available for the specified environment.
        api_response = api_instance.cluster_versions_list_by_environment(location, environment, api_version, subscription_id)
        print("The response of ClusterVersionApi->cluster_versions_list_by_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterVersionApi->cluster_versions_list_by_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location for the cluster code versions. This is different from cluster location. | 
 **environment** | **str**| The operating system of the cluster. The default means all. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2018-02-01\&quot; for this specification. | [default to 2018-02-01]
 **subscription_id** | **str**| The customer subscription identifier. | 

### Return type

[**ClusterCodeVersionsListResult**](ClusterCodeVersionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

