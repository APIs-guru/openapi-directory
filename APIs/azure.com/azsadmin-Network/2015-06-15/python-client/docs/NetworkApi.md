# openapi_client.NetworkApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locations_operation_results_list**](NetworkApi.md#locations_operation_results_list) | **GET** /providers/Microsoft.Network.Admin/locations/{location}/operationResults | 
[**locations_operations_list**](NetworkApi.md#locations_operations_list) | **GET** /providers/Microsoft.Network.Admin/locations/{location}/operations | 
[**on_prem_locations_list**](NetworkApi.md#on_prem_locations_list) | **GET** /providers/Microsoft.Network.Admin/locations | 
[**operations_list**](NetworkApi.md#operations_list) | **GET** /providers/Microsoft.Network.Admin/operations | 
[**resource_provider_state_get**](NetworkApi.md#resource_provider_state_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminOverview | 


# **locations_operation_results_list**
> OperationResultList locations_operation_results_list(api_version, location)



Returns the list of operation results for a location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_result_list import OperationResultList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkApi(api_client)
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')
    location = 'location_example' # str | Location of the resource.

    try:
        api_response = api_instance.locations_operation_results_list(api_version, location)
        print("The response of NetworkApi->locations_operation_results_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->locations_operation_results_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]
 **location** | **str**| Location of the resource. | 

### Return type

[**OperationResultList**](OperationResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_operations_list**
> OperationList locations_operations_list(api_version, location)



Returns the list of support REST operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list import OperationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkApi(api_client)
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')
    location = 'location_example' # str | Location of the resource.

    try:
        api_response = api_instance.locations_operations_list(api_version, location)
        print("The response of NetworkApi->locations_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->locations_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]
 **location** | **str**| Location of the resource. | 

### Return type

[**OperationList**](OperationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **on_prem_locations_list**
> LocationsList on_prem_locations_list(api_version)



Returns the list of supported locations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.locations_list import LocationsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkApi(api_client)
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')

    try:
        api_response = api_instance.on_prem_locations_list(api_version)
        print("The response of NetworkApi->on_prem_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->on_prem_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]

### Return type

[**LocationsList**](LocationsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationList operations_list(api_version)



Returns the list of support REST operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list import OperationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkApi(api_client)
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of NetworkApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]

### Return type

[**OperationList**](OperationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_provider_state_get**
> AdminOverview resource_provider_state_get(subscription_id, api_version)



Get an overview of the state of the network resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.admin_overview import AdminOverview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2015-06-15' # str | Client API Version. (default to '2015-06-15')

    try:
        api_response = api_instance.resource_provider_state_get(subscription_id, api_version)
        print("The response of NetworkApi->resource_provider_state_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkApi->resource_provider_state_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2015-06-15&#39;]

### Return type

[**AdminOverview**](AdminOverview.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

