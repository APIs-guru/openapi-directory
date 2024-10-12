# openapi_client.WarmSpareApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_switch_warm_spare_1**](WarmSpareApi.md#get_device_switch_warm_spare_1) | **GET** /devices/{serial}/switch/warmSpare | Return warm spare configuration for a switch
[**get_network_appliance_warm_spare_1**](WarmSpareApi.md#get_network_appliance_warm_spare_1) | **GET** /networks/{networkId}/appliance/warmSpare | Return MX warm spare settings
[**swap_network_appliance_warm_spare_1**](WarmSpareApi.md#swap_network_appliance_warm_spare_1) | **POST** /networks/{networkId}/appliance/warmSpare/swap | Swap MX primary and warm spare appliances
[**update_device_switch_warm_spare_1**](WarmSpareApi.md#update_device_switch_warm_spare_1) | **PUT** /devices/{serial}/switch/warmSpare | Update warm spare configuration for a switch
[**update_network_appliance_warm_spare_1**](WarmSpareApi.md#update_network_appliance_warm_spare_1) | **PUT** /networks/{networkId}/appliance/warmSpare | Update MX warm spare settings


# **get_device_switch_warm_spare_1**
> object get_device_switch_warm_spare_1(serial)

Return warm spare configuration for a switch

Return warm spare configuration for a switch

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
    api_instance = openapi_client.WarmSpareApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return warm spare configuration for a switch
        api_response = api_instance.get_device_switch_warm_spare_1(serial)
        print("The response of WarmSpareApi->get_device_switch_warm_spare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarmSpareApi->get_device_switch_warm_spare_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_network_appliance_warm_spare_1**
> object get_network_appliance_warm_spare_1(network_id)

Return MX warm spare settings

Return MX warm spare settings

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
    api_instance = openapi_client.WarmSpareApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return MX warm spare settings
        api_response = api_instance.get_network_appliance_warm_spare_1(network_id)
        print("The response of WarmSpareApi->get_network_appliance_warm_spare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarmSpareApi->get_network_appliance_warm_spare_1: %s\n" % e)
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

# **swap_network_appliance_warm_spare_1**
> object swap_network_appliance_warm_spare_1(network_id)

Swap MX primary and warm spare appliances

Swap MX primary and warm spare appliances

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
    api_instance = openapi_client.WarmSpareApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Swap MX primary and warm spare appliances
        api_response = api_instance.swap_network_appliance_warm_spare_1(network_id)
        print("The response of WarmSpareApi->swap_network_appliance_warm_spare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarmSpareApi->swap_network_appliance_warm_spare_1: %s\n" % e)
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

# **update_device_switch_warm_spare_1**
> object update_device_switch_warm_spare_1(serial, update_device_switch_warm_spare_request)

Update warm spare configuration for a switch

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_warm_spare_request import UpdateDeviceSwitchWarmSpareRequest
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
    api_instance = openapi_client.WarmSpareApi(api_client)
    serial = 'serial_example' # str | 
    update_device_switch_warm_spare_request = openapi_client.UpdateDeviceSwitchWarmSpareRequest() # UpdateDeviceSwitchWarmSpareRequest | 

    try:
        # Update warm spare configuration for a switch
        api_response = api_instance.update_device_switch_warm_spare_1(serial, update_device_switch_warm_spare_request)
        print("The response of WarmSpareApi->update_device_switch_warm_spare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarmSpareApi->update_device_switch_warm_spare_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_switch_warm_spare_request** | [**UpdateDeviceSwitchWarmSpareRequest**](UpdateDeviceSwitchWarmSpareRequest.md)|  | 

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

# **update_network_appliance_warm_spare_1**
> object update_network_appliance_warm_spare_1(network_id, update_network_appliance_warm_spare_request)

Update MX warm spare settings

Update MX warm spare settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_warm_spare_request import UpdateNetworkApplianceWarmSpareRequest
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
    api_instance = openapi_client.WarmSpareApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_warm_spare_request = openapi_client.UpdateNetworkApplianceWarmSpareRequest() # UpdateNetworkApplianceWarmSpareRequest | 

    try:
        # Update MX warm spare settings
        api_response = api_instance.update_network_appliance_warm_spare_1(network_id, update_network_appliance_warm_spare_request)
        print("The response of WarmSpareApi->update_network_appliance_warm_spare_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarmSpareApi->update_network_appliance_warm_spare_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_warm_spare_request** | [**UpdateNetworkApplianceWarmSpareRequest**](UpdateNetworkApplianceWarmSpareRequest.md)|  | 

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

