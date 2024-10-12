# openapi_client.EndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpoints_create_or_update**](EndpointsApi.md#endpoints_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName} | 
[**endpoints_delete**](EndpointsApi.md#endpoints_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName} | 
[**endpoints_get**](EndpointsApi.md#endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName} | 
[**endpoints_update**](EndpointsApi.md#endpoints_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName} | 


# **endpoints_create_or_update**
> Endpoint endpoints_create_or_update(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id, parameters)



Create or update a Traffic Manager endpoint.

### Example


```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager endpoint to be created or updated.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    endpoint_type = 'endpoint_type_example' # str | The type of the Traffic Manager endpoint to be created or updated.
    endpoint_name = 'endpoint_name_example' # str | The name of the Traffic Manager endpoint to be created or updated.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Endpoint() # Endpoint | The Traffic Manager endpoint parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.endpoints_create_or_update(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id, parameters)
        print("The response of EndpointsApi->endpoints_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager endpoint to be created or updated. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **endpoint_type** | **str**| The type of the Traffic Manager endpoint to be created or updated. | 
 **endpoint_name** | **str**| The name of the Traffic Manager endpoint to be created or updated. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Endpoint**](Endpoint.md)| The Traffic Manager endpoint parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created or updated Endpoint. |  -  |
**201** | The created or updated Endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_delete**
> endpoints_delete(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id)



Deletes a Traffic Manager endpoint.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager endpoint to be deleted.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    endpoint_type = 'endpoint_type_example' # str | The type of the Traffic Manager endpoint to be deleted.
    endpoint_name = 'endpoint_name_example' # str | The name of the Traffic Manager endpoint to be deleted.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.endpoints_delete(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager endpoint to be deleted. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **endpoint_type** | **str**| The type of the Traffic Manager endpoint to be deleted. | 
 **endpoint_name** | **str**| The name of the Traffic Manager endpoint to be deleted. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_get**
> Endpoint endpoints_get(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id)



Gets a Traffic Manager endpoint.

### Example


```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager endpoint.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    endpoint_type = 'endpoint_type_example' # str | The type of the Traffic Manager endpoint.
    endpoint_name = 'endpoint_name_example' # str | The name of the Traffic Manager endpoint.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.endpoints_get(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id)
        print("The response of EndpointsApi->endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager endpoint. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **endpoint_type** | **str**| The type of the Traffic Manager endpoint. | 
 **endpoint_name** | **str**| The name of the Traffic Manager endpoint. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Traffic Manager endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **endpoints_update**
> Endpoint endpoints_update(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id, parameters)



Update a Traffic Manager endpoint.

### Example


```python
import openapi_client
from openapi_client.models.endpoint import Endpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager endpoint to be updated.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    endpoint_type = 'endpoint_type_example' # str | The type of the Traffic Manager endpoint to be updated.
    endpoint_name = 'endpoint_name_example' # str | The name of the Traffic Manager endpoint to be updated.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Endpoint() # Endpoint | The Traffic Manager endpoint parameters supplied to the Update operation.

    try:
        api_response = api_instance.endpoints_update(resource_group_name, profile_name, endpoint_type, endpoint_name, api_version, subscription_id, parameters)
        print("The response of EndpointsApi->endpoints_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointsApi->endpoints_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager endpoint to be updated. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **endpoint_type** | **str**| The type of the Traffic Manager endpoint to be updated. | 
 **endpoint_name** | **str**| The name of the Traffic Manager endpoint to be updated. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Endpoint**](Endpoint.md)| The Traffic Manager endpoint parameters supplied to the Update operation. | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated Traffic Manager endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

