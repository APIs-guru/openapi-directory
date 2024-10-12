# openapi_client.DelegatedApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_appliance_prefixes_delegated_static_2**](DelegatedApi.md#create_network_appliance_prefixes_delegated_static_2) | **POST** /networks/{networkId}/appliance/prefixes/delegated/statics | Add a static delegated prefix from a network
[**delete_network_appliance_prefixes_delegated_static_2**](DelegatedApi.md#delete_network_appliance_prefixes_delegated_static_2) | **DELETE** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Delete a static delegated prefix from a network
[**get_device_appliance_prefixes_delegated_2**](DelegatedApi.md#get_device_appliance_prefixes_delegated_2) | **GET** /devices/{serial}/appliance/prefixes/delegated | Return current delegated IPv6 prefixes on an appliance.
[**get_device_appliance_prefixes_delegated_vlan_assignments_2**](DelegatedApi.md#get_device_appliance_prefixes_delegated_vlan_assignments_2) | **GET** /devices/{serial}/appliance/prefixes/delegated/vlanAssignments | Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
[**get_network_appliance_prefixes_delegated_static_2**](DelegatedApi.md#get_network_appliance_prefixes_delegated_static_2) | **GET** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Return a static delegated prefix from a network
[**get_network_appliance_prefixes_delegated_statics_2**](DelegatedApi.md#get_network_appliance_prefixes_delegated_statics_2) | **GET** /networks/{networkId}/appliance/prefixes/delegated/statics | List static delegated prefixes for a network
[**update_network_appliance_prefixes_delegated_static_2**](DelegatedApi.md#update_network_appliance_prefixes_delegated_static_2) | **PUT** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Update a static delegated prefix from a network


# **create_network_appliance_prefixes_delegated_static_2**
> object create_network_appliance_prefixes_delegated_static_2(network_id, create_network_appliance_prefixes_delegated_static_request)

Add a static delegated prefix from a network

Add a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_prefixes_delegated_static_request import CreateNetworkAppliancePrefixesDelegatedStaticRequest
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
    api_instance = openapi_client.DelegatedApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_prefixes_delegated_static_request = openapi_client.CreateNetworkAppliancePrefixesDelegatedStaticRequest() # CreateNetworkAppliancePrefixesDelegatedStaticRequest | 

    try:
        # Add a static delegated prefix from a network
        api_response = api_instance.create_network_appliance_prefixes_delegated_static_2(network_id, create_network_appliance_prefixes_delegated_static_request)
        print("The response of DelegatedApi->create_network_appliance_prefixes_delegated_static_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->create_network_appliance_prefixes_delegated_static_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_prefixes_delegated_static_request** | [**CreateNetworkAppliancePrefixesDelegatedStaticRequest**](CreateNetworkAppliancePrefixesDelegatedStaticRequest.md)|  | 

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

# **delete_network_appliance_prefixes_delegated_static_2**
> delete_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id)

Delete a static delegated prefix from a network

Delete a static delegated prefix from a network

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
    api_instance = openapi_client.DelegatedApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 

    try:
        # Delete a static delegated prefix from a network
        api_instance.delete_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id)
    except Exception as e:
        print("Exception when calling DelegatedApi->delete_network_appliance_prefixes_delegated_static_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 

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

# **get_device_appliance_prefixes_delegated_2**
> List[object] get_device_appliance_prefixes_delegated_2(serial)

Return current delegated IPv6 prefixes on an appliance.

Return current delegated IPv6 prefixes on an appliance.

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
    api_instance = openapi_client.DelegatedApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return current delegated IPv6 prefixes on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_2(serial)
        print("The response of DelegatedApi->get_device_appliance_prefixes_delegated_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->get_device_appliance_prefixes_delegated_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_appliance_prefixes_delegated_vlan_assignments_2**
> List[object] get_device_appliance_prefixes_delegated_vlan_assignments_2(serial)

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

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
    api_instance = openapi_client.DelegatedApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_vlan_assignments_2(serial)
        print("The response of DelegatedApi->get_device_appliance_prefixes_delegated_vlan_assignments_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->get_device_appliance_prefixes_delegated_vlan_assignments_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_network_appliance_prefixes_delegated_static_2**
> GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner get_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id)

Return a static delegated prefix from a network

Return a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_prefixes_delegated_statics200_response_inner import GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner
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
    api_instance = openapi_client.DelegatedApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 

    try:
        # Return a static delegated prefix from a network
        api_response = api_instance.get_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id)
        print("The response of DelegatedApi->get_network_appliance_prefixes_delegated_static_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->get_network_appliance_prefixes_delegated_static_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 

### Return type

[**GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner**](GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.md)

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

# **get_network_appliance_prefixes_delegated_statics_2**
> List[GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner] get_network_appliance_prefixes_delegated_statics_2(network_id)

List static delegated prefixes for a network

List static delegated prefixes for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_prefixes_delegated_statics200_response_inner import GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner
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
    api_instance = openapi_client.DelegatedApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List static delegated prefixes for a network
        api_response = api_instance.get_network_appliance_prefixes_delegated_statics_2(network_id)
        print("The response of DelegatedApi->get_network_appliance_prefixes_delegated_statics_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->get_network_appliance_prefixes_delegated_statics_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner]**](GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.md)

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

# **update_network_appliance_prefixes_delegated_static_2**
> object update_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id, update_network_appliance_prefixes_delegated_static_request=update_network_appliance_prefixes_delegated_static_request)

Update a static delegated prefix from a network

Update a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_prefixes_delegated_static_request import UpdateNetworkAppliancePrefixesDelegatedStaticRequest
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
    api_instance = openapi_client.DelegatedApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 
    update_network_appliance_prefixes_delegated_static_request = openapi_client.UpdateNetworkAppliancePrefixesDelegatedStaticRequest() # UpdateNetworkAppliancePrefixesDelegatedStaticRequest |  (optional)

    try:
        # Update a static delegated prefix from a network
        api_response = api_instance.update_network_appliance_prefixes_delegated_static_2(network_id, static_delegated_prefix_id, update_network_appliance_prefixes_delegated_static_request=update_network_appliance_prefixes_delegated_static_request)
        print("The response of DelegatedApi->update_network_appliance_prefixes_delegated_static_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DelegatedApi->update_network_appliance_prefixes_delegated_static_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 
 **update_network_appliance_prefixes_delegated_static_request** | [**UpdateNetworkAppliancePrefixesDelegatedStaticRequest**](UpdateNetworkAppliancePrefixesDelegatedStaticRequest.md)|  | [optional] 

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

