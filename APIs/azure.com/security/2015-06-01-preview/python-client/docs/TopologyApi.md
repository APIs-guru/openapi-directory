# openapi_client.TopologyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topology_get**](TopologyApi.md#topology_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/topologies/{topologyResourceName} | 
[**topology_list**](TopologyApi.md#topology_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/topologies | 
[**topology_list_by_home_region**](TopologyApi.md#topology_list_by_home_region) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/topologies | 


# **topology_get**
> TopologyResource topology_get(subscription_id, resource_group_name, asc_location, topology_resource_name, api_version)



Gets a specific topology component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.topology_resource import TopologyResource
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
    api_instance = openapi_client.TopologyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    topology_resource_name = 'topology_resource_name_example' # str | Name of a topology resources collection.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.topology_get(subscription_id, resource_group_name, asc_location, topology_resource_name, api_version)
        print("The response of TopologyApi->topology_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopologyApi->topology_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **topology_resource_name** | **str**| Name of a topology resources collection. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**TopologyResource**](TopologyResource.md)

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

# **topology_list**
> TopologyList topology_list(subscription_id, api_version)



Gets a list that allows to build a topology view of a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.topology_list import TopologyList
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
    api_instance = openapi_client.TopologyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.topology_list(subscription_id, api_version)
        print("The response of TopologyApi->topology_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopologyApi->topology_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**TopologyList**](TopologyList.md)

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

# **topology_list_by_home_region**
> TopologyList topology_list_by_home_region(subscription_id, asc_location, api_version)



Gets a list that allows to build a topology view of a subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.topology_list import TopologyList
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
    api_instance = openapi_client.TopologyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.topology_list_by_home_region(subscription_id, asc_location, api_version)
        print("The response of TopologyApi->topology_list_by_home_region:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopologyApi->topology_list_by_home_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**TopologyList**](TopologyList.md)

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

