# openapi_client.TrafficShapingApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_appliance_traffic_shaping_custom_performance_class_1**](TrafficShapingApi.md#create_network_appliance_traffic_shaping_custom_performance_class_1) | **POST** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | Add a custom performance class for an MX network
[**delete_network_appliance_traffic_shaping_custom_performance_class_1**](TrafficShapingApi.md#delete_network_appliance_traffic_shaping_custom_performance_class_1) | **DELETE** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Delete a custom performance class from an MX network
[**get_network_appliance_traffic_shaping_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_1) | **GET** /networks/{networkId}/appliance/trafficShaping | Display the traffic shaping settings for an MX network
[**get_network_appliance_traffic_shaping_custom_performance_class_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_custom_performance_class_1) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Return a custom performance class for an MX network
[**get_network_appliance_traffic_shaping_custom_performance_classes_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_custom_performance_classes_1) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | List all custom performance classes for an MX network
[**get_network_appliance_traffic_shaping_rules_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_rules_1) | **GET** /networks/{networkId}/appliance/trafficShaping/rules | Display the traffic shaping settings rules for an MX network
[**get_network_appliance_traffic_shaping_uplink_bandwidth_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_uplink_bandwidth_1) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Returns the uplink bandwidth limits for your MX network
[**get_network_appliance_traffic_shaping_uplink_selection_1**](TrafficShapingApi.md#get_network_appliance_traffic_shaping_uplink_selection_1) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Show uplink selection settings for an MX network
[**get_network_traffic_shaping_application_categories_1**](TrafficShapingApi.md#get_network_traffic_shaping_application_categories_1) | **GET** /networks/{networkId}/trafficShaping/applicationCategories | Returns the application categories for traffic shaping rules.
[**get_network_traffic_shaping_dscp_tagging_options_1**](TrafficShapingApi.md#get_network_traffic_shaping_dscp_tagging_options_1) | **GET** /networks/{networkId}/trafficShaping/dscpTaggingOptions | Returns the available DSCP tagging options for your traffic shaping rules.
[**get_network_wireless_ssid_traffic_shaping_rules_2**](TrafficShapingApi.md#get_network_wireless_ssid_traffic_shaping_rules_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**update_network_appliance_traffic_shaping_1**](TrafficShapingApi.md#update_network_appliance_traffic_shaping_1) | **PUT** /networks/{networkId}/appliance/trafficShaping | Update the traffic shaping settings for an MX network
[**update_network_appliance_traffic_shaping_custom_performance_class_1**](TrafficShapingApi.md#update_network_appliance_traffic_shaping_custom_performance_class_1) | **PUT** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Update a custom performance class for an MX network
[**update_network_appliance_traffic_shaping_rules_1**](TrafficShapingApi.md#update_network_appliance_traffic_shaping_rules_1) | **PUT** /networks/{networkId}/appliance/trafficShaping/rules | Update the traffic shaping settings rules for an MX network
[**update_network_appliance_traffic_shaping_uplink_bandwidth_1**](TrafficShapingApi.md#update_network_appliance_traffic_shaping_uplink_bandwidth_1) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Updates the uplink bandwidth settings for your MX network.
[**update_network_appliance_traffic_shaping_uplink_selection_1**](TrafficShapingApi.md#update_network_appliance_traffic_shaping_uplink_selection_1) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Update uplink selection settings for an MX network
[**update_network_wireless_ssid_traffic_shaping_rules_2**](TrafficShapingApi.md#update_network_wireless_ssid_traffic_shaping_rules_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network


# **create_network_appliance_traffic_shaping_custom_performance_class_1**
> object create_network_appliance_traffic_shaping_custom_performance_class_1(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest | 

    try:
        # Add a custom performance class for an MX network
        api_response = api_instance.create_network_appliance_traffic_shaping_custom_performance_class_1(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of TrafficShapingApi->create_network_appliance_traffic_shaping_custom_performance_class_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->create_network_appliance_traffic_shaping_custom_performance_class_1: %s\n" % e)
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

# **delete_network_appliance_traffic_shaping_custom_performance_class_1**
> delete_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id)

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Delete a custom performance class from an MX network
        api_instance.delete_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->delete_network_appliance_traffic_shaping_custom_performance_class_1: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_1**
> object get_network_appliance_traffic_shaping_1(network_id)

Display the traffic shaping settings for an MX network

Display the traffic shaping settings for an MX network

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Display the traffic shaping settings for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_1(network_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_appliance_traffic_shaping_custom_performance_class_1**
> object get_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id)

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Return a custom performance class for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_custom_performance_class_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_custom_performance_class_1: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_custom_performance_classes_1**
> List[object] get_network_appliance_traffic_shaping_custom_performance_classes_1(network_id)

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all custom performance classes for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_classes_1(network_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_custom_performance_classes_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_custom_performance_classes_1: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_rules_1**
> object get_network_appliance_traffic_shaping_rules_1(network_id)

Display the traffic shaping settings rules for an MX network

Display the traffic shaping settings rules for an MX network

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Display the traffic shaping settings rules for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_rules_1(network_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_appliance_traffic_shaping_uplink_bandwidth_1**
> GetNetworkApplianceTrafficShapingUplinkBandwidth200Response get_network_appliance_traffic_shaping_uplink_bandwidth_1(network_id)

Returns the uplink bandwidth limits for your MX network

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response import GetNetworkApplianceTrafficShapingUplinkBandwidth200Response
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the uplink bandwidth limits for your MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_uplink_bandwidth_1(network_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_uplink_bandwidth_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_uplink_bandwidth_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkBandwidth200Response**](GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.md)

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

# **get_network_appliance_traffic_shaping_uplink_selection_1**
> GetNetworkApplianceTrafficShapingUplinkSelection200Response get_network_appliance_traffic_shaping_uplink_selection_1(network_id)

Show uplink selection settings for an MX network

Show uplink selection settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response import GetNetworkApplianceTrafficShapingUplinkSelection200Response
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Show uplink selection settings for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_uplink_selection_1(network_id)
        print("The response of TrafficShapingApi->get_network_appliance_traffic_shaping_uplink_selection_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_appliance_traffic_shaping_uplink_selection_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkSelection200Response**](GetNetworkApplianceTrafficShapingUplinkSelection200Response.md)

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

# **get_network_traffic_shaping_application_categories_1**
> object get_network_traffic_shaping_application_categories_1(network_id)

Returns the application categories for traffic shaping rules.

Returns the application categories for traffic shaping rules.

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the application categories for traffic shaping rules.
        api_response = api_instance.get_network_traffic_shaping_application_categories_1(network_id)
        print("The response of TrafficShapingApi->get_network_traffic_shaping_application_categories_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_traffic_shaping_application_categories_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_traffic_shaping_dscp_tagging_options_1**
> List[object] get_network_traffic_shaping_dscp_tagging_options_1(network_id)

Returns the available DSCP tagging options for your traffic shaping rules.

Returns the available DSCP tagging options for your traffic shaping rules.

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the available DSCP tagging options for your traffic shaping rules.
        api_response = api_instance.get_network_traffic_shaping_dscp_tagging_options_1(network_id)
        print("The response of TrafficShapingApi->get_network_traffic_shaping_dscp_tagging_options_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_traffic_shaping_dscp_tagging_options_1: %s\n" % e)
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

# **get_network_wireless_ssid_traffic_shaping_rules_2**
> object get_network_wireless_ssid_traffic_shaping_rules_2(network_id, number)

Display the traffic shaping settings for a SSID on an MR network

Display the traffic shaping settings for a SSID on an MR network

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the traffic shaping settings for a SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_traffic_shaping_rules_2(network_id, number)
        print("The response of TrafficShapingApi->get_network_wireless_ssid_traffic_shaping_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->get_network_wireless_ssid_traffic_shaping_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

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

# **update_network_appliance_traffic_shaping_1**
> object update_network_appliance_traffic_shaping_1(network_id, update_network_appliance_traffic_shaping_request=update_network_appliance_traffic_shaping_request)

Update the traffic shaping settings for an MX network

Update the traffic shaping settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_request import UpdateNetworkApplianceTrafficShapingRequest
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_request = openapi_client.UpdateNetworkApplianceTrafficShapingRequest() # UpdateNetworkApplianceTrafficShapingRequest |  (optional)

    try:
        # Update the traffic shaping settings for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_1(network_id, update_network_appliance_traffic_shaping_request=update_network_appliance_traffic_shaping_request)
        print("The response of TrafficShapingApi->update_network_appliance_traffic_shaping_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_appliance_traffic_shaping_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_request** | [**UpdateNetworkApplianceTrafficShapingRequest**](UpdateNetworkApplianceTrafficShapingRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_custom_performance_class_1**
> object update_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)

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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 
    update_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest |  (optional)

    try:
        # Update a custom performance class for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_custom_performance_class_1(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of TrafficShapingApi->update_network_appliance_traffic_shaping_custom_performance_class_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_appliance_traffic_shaping_custom_performance_class_1: %s\n" % e)
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

# **update_network_appliance_traffic_shaping_rules_1**
> object update_network_appliance_traffic_shaping_rules_1(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)

Update the traffic shaping settings rules for an MX network

Update the traffic shaping settings rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request import UpdateNetworkApplianceTrafficShapingRulesRequest
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_rules_request = openapi_client.UpdateNetworkApplianceTrafficShapingRulesRequest() # UpdateNetworkApplianceTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings rules for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_rules_1(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)
        print("The response of TrafficShapingApi->update_network_appliance_traffic_shaping_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_appliance_traffic_shaping_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_rules_request** | [**UpdateNetworkApplianceTrafficShapingRulesRequest**](UpdateNetworkApplianceTrafficShapingRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_uplink_bandwidth_1**
> object update_network_appliance_traffic_shaping_uplink_bandwidth_1(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)

Updates the uplink bandwidth settings for your MX network.

Updates the uplink bandwidth settings for your MX network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_uplink_bandwidth_request = openapi_client.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest() # UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest |  (optional)

    try:
        # Updates the uplink bandwidth settings for your MX network.
        api_response = api_instance.update_network_appliance_traffic_shaping_uplink_bandwidth_1(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)
        print("The response of TrafficShapingApi->update_network_appliance_traffic_shaping_uplink_bandwidth_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_appliance_traffic_shaping_uplink_bandwidth_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_uplink_bandwidth_request** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_uplink_selection_1**
> GetNetworkApplianceTrafficShapingUplinkSelection200Response update_network_appliance_traffic_shaping_uplink_selection_1(network_id, update_network_appliance_traffic_shaping_uplink_selection_request=update_network_appliance_traffic_shaping_uplink_selection_request)

Update uplink selection settings for an MX network

Update uplink selection settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response import GetNetworkApplianceTrafficShapingUplinkSelection200Response
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_uplink_selection_request = openapi_client.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest() # UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest |  (optional)

    try:
        # Update uplink selection settings for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_uplink_selection_1(network_id, update_network_appliance_traffic_shaping_uplink_selection_request=update_network_appliance_traffic_shaping_uplink_selection_request)
        print("The response of TrafficShapingApi->update_network_appliance_traffic_shaping_uplink_selection_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_appliance_traffic_shaping_uplink_selection_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_uplink_selection_request** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkSelection200Response**](GetNetworkApplianceTrafficShapingUplinkSelection200Response.md)

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

# **update_network_wireless_ssid_traffic_shaping_rules_2**
> object update_network_wireless_ssid_traffic_shaping_rules_2(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)

Update the traffic shaping settings for an SSID on an MR network

Update the traffic shaping settings for an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_traffic_shaping_rules_request import UpdateNetworkWirelessSsidTrafficShapingRulesRequest
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
    api_instance = openapi_client.TrafficShapingApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_traffic_shaping_rules_request = openapi_client.UpdateNetworkWirelessSsidTrafficShapingRulesRequest() # UpdateNetworkWirelessSsidTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings for an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_traffic_shaping_rules_2(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)
        print("The response of TrafficShapingApi->update_network_wireless_ssid_traffic_shaping_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficShapingApi->update_network_wireless_ssid_traffic_shaping_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_traffic_shaping_rules_request** | [**UpdateNetworkWirelessSsidTrafficShapingRulesRequest**](UpdateNetworkWirelessSsidTrafficShapingRulesRequest.md)|  | [optional] 

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

