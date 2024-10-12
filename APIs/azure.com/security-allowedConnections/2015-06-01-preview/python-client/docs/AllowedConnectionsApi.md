# openapi_client.AllowedConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allowed_connections_get**](AllowedConnectionsApi.md#allowed_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/allowedConnections/{connectionType} | 
[**allowed_connections_list**](AllowedConnectionsApi.md#allowed_connections_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/allowedConnections | 
[**allowed_connections_list_by_home_region**](AllowedConnectionsApi.md#allowed_connections_list_by_home_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/allowedConnections | 


# **allowed_connections_get**
> AllowedConnectionsResource allowed_connections_get(subscription_id, resource_group_name, asc_location, connection_type, api_version)



Gets the list of all possible traffic between resources for the subscription and location, based on connection type.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.allowed_connections_resource import AllowedConnectionsResource
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
    api_instance = openapi_client.AllowedConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    connection_type = 'connection_type_example' # str | The type of allowed connections (Internal, External)
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.allowed_connections_get(subscription_id, resource_group_name, asc_location, connection_type, api_version)
        print("The response of AllowedConnectionsApi->allowed_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllowedConnectionsApi->allowed_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **connection_type** | **str**| The type of allowed connections (Internal, External) | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AllowedConnectionsResource**](AllowedConnectionsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **allowed_connections_list**
> AllowedConnectionsList allowed_connections_list(subscription_id, api_version)



Gets the list of all possible traffic between resources for the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.allowed_connections_list import AllowedConnectionsList
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
    api_instance = openapi_client.AllowedConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.allowed_connections_list(subscription_id, api_version)
        print("The response of AllowedConnectionsApi->allowed_connections_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllowedConnectionsApi->allowed_connections_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AllowedConnectionsList**](AllowedConnectionsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **allowed_connections_list_by_home_region**
> AllowedConnectionsList allowed_connections_list_by_home_region(subscription_id, asc_location, api_version)



Gets the list of all possible traffic between resources for the subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.allowed_connections_list import AllowedConnectionsList
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
    api_instance = openapi_client.AllowedConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.allowed_connections_list_by_home_region(subscription_id, asc_location, api_version)
        print("The response of AllowedConnectionsApi->allowed_connections_list_by_home_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllowedConnectionsApi->allowed_connections_list_by_home_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AllowedConnectionsList**](AllowedConnectionsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

