# openapi_client.CustomPerformanceClassesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_appliance_traffic_shaping_custom_performance_class_2**](CustomPerformanceClassesApi.md#create_network_appliance_traffic_shaping_custom_performance_class_2) | **POST** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | Add a custom performance class for an MX network
[**delete_network_appliance_traffic_shaping_custom_performance_class_2**](CustomPerformanceClassesApi.md#delete_network_appliance_traffic_shaping_custom_performance_class_2) | **DELETE** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Delete a custom performance class from an MX network
[**get_network_appliance_traffic_shaping_custom_performance_class_2**](CustomPerformanceClassesApi.md#get_network_appliance_traffic_shaping_custom_performance_class_2) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Return a custom performance class for an MX network
[**get_network_appliance_traffic_shaping_custom_performance_classes_2**](CustomPerformanceClassesApi.md#get_network_appliance_traffic_shaping_custom_performance_classes_2) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | List all custom performance classes for an MX network
[**update_network_appliance_traffic_shaping_custom_performance_class_2**](CustomPerformanceClassesApi.md#update_network_appliance_traffic_shaping_custom_performance_class_2) | **PUT** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Update a custom performance class for an MX network


# **create_network_appliance_traffic_shaping_custom_performance_class_2**
> object create_network_appliance_traffic_shaping_custom_performance_class_2(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)

Add a custom performance class for an MX network

Add a custom performance class for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_traffic_shaping_custom_performance_class_request import CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomPerformanceClassesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest | 

    try:
        # Add a custom performance class for an MX network
        api_response = api_instance.create_network_appliance_traffic_shaping_custom_performance_class_2(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of CustomPerformanceClassesApi->create_network_appliance_traffic_shaping_custom_performance_class_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomPerformanceClassesApi->create_network_appliance_traffic_shaping_custom_performance_class_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_traffic_shaping_custom_performance_class_request** | [**CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest**](CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_appliance_traffic_shaping_custom_performance_class_2**
> delete_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id)

Delete a custom performance class from an MX network

Delete a custom performance class from an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomPerformanceClassesApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Delete a custom performance class from an MX network
        api_instance.delete_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id)
    except Exception as e:
        print("Exception when calling CustomPerformanceClassesApi->delete_network_appliance_traffic_shaping_custom_performance_class_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_traffic_shaping_custom_performance_class_2**
> object get_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id)

Return a custom performance class for an MX network

Return a custom performance class for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomPerformanceClassesApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Return a custom performance class for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id)
        print("The response of CustomPerformanceClassesApi->get_network_appliance_traffic_shaping_custom_performance_class_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomPerformanceClassesApi->get_network_appliance_traffic_shaping_custom_performance_class_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_traffic_shaping_custom_performance_classes_2**
> List[object] get_network_appliance_traffic_shaping_custom_performance_classes_2(network_id)

List all custom performance classes for an MX network

List all custom performance classes for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomPerformanceClassesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all custom performance classes for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_classes_2(network_id)
        print("The response of CustomPerformanceClassesApi->get_network_appliance_traffic_shaping_custom_performance_classes_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomPerformanceClassesApi->get_network_appliance_traffic_shaping_custom_performance_classes_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_appliance_traffic_shaping_custom_performance_class_2**
> object update_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)

Update a custom performance class for an MX network

Update a custom performance class for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_custom_performance_class_request import UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomPerformanceClassesApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 
    update_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest |  (optional)

    try:
        # Update a custom performance class for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_custom_performance_class_2(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of CustomPerformanceClassesApi->update_network_appliance_traffic_shaping_custom_performance_class_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomPerformanceClassesApi->update_network_appliance_traffic_shaping_custom_performance_class_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_custom_performance_class_request** | [**UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest**](UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

